import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { randomUUID } from 'crypto';

type LoyaltyLevel = 'bronce' | 'oro' | 'platino';

interface LoyaltyAccountRow {
  id: string;
  user_id: string;
  points_balance: number;
  lifetime_points: number;
  level: LoyaltyLevel;
  new_user_shipping_free_until: Date | null;
  welcome_popup_last_shown_at: Date | null;
  created_at: Date;
  updated_at: Date;
}

@Injectable()
export class LoyaltyService {
  private readonly logger = new Logger(LoyaltyService.name);
  private schemaReady = false;

  readonly signupBonusPoints = 200;
  readonly pointsPerSolRedeem = 100;
  readonly pointsPerSolEarn = 5;
  readonly newUserFreeShippingDays = 15;
  readonly welcomePopupDays = 5;
  readonly goldMinLifetimePoints = 1000;
  readonly platinumMinLifetimePoints = 3000;

  constructor(private prisma: PrismaService) {}

  async ensureSchema() {
    this.schemaReady = true;
  }

  private _levelFromLifetime(lifetimePoints: number): LoyaltyLevel {
    if (lifetimePoints >= this.platinumMinLifetimePoints) return 'platino';
    if (lifetimePoints >= this.goldMinLifetimePoints) return 'oro';
    return 'bronce';
  }

  private _nextLevelInfo(lifetimePoints: number) {
    if (lifetimePoints < this.goldMinLifetimePoints) {
      return {
        next_level: 'oro' as LoyaltyLevel,
        points_to_next_level: this.goldMinLifetimePoints - lifetimePoints,
      };
    }
    if (lifetimePoints < this.platinumMinLifetimePoints) {
      return {
        next_level: 'platino' as LoyaltyLevel,
        points_to_next_level: this.platinumMinLifetimePoints - lifetimePoints,
      };
    }
    return {
      next_level: null,
      points_to_next_level: 0,
    };
  }

  private _levelBenefits(level: LoyaltyLevel) {
    if (level === 'platino') {
      return {
        title: 'Platino',
        description: 'Todos los envios son gratis.',
      };
    }
    if (level === 'oro') {
      return {
        title: 'Oro',
        description: 'Algunos pedidos tienen envio gratis (desde S/ 35).',
      };
    }
    return {
      title: 'Bronce',
      description: 'Nivel basico.',
    };
  }

  private _daysRemaining(until: Date | null): number {
    if (!until) return 0;
    const ms = until.getTime() - Date.now();
    if (ms <= 0) return 0;
    return Math.ceil(ms / (1000 * 60 * 60 * 24));
  }

  private async _findAccount(userId: string): Promise<LoyaltyAccountRow | null> {
    const account = await this.prisma.customer_loyalty_accounts.findUnique({
      where: { user_id: userId }
    });
    if (!account) return null;
    return {
      ...account,
      level: account.level as LoyaltyLevel
    };
  }

  async ensureAccount(userId: string) {
    await this.ensureSchema();

    const existing = await this._findAccount(userId);
    if (existing) return existing;

    try {
      await this.prisma.customer_loyalty_accounts.create({
        data: {
          user_id: userId,
          points_balance: 0,
          lifetime_points: 0,
          level: 'bronce'
        }
      });
    } catch (e: any) {
      // Ignore conflict
    }

    const created = await this._findAccount(userId);
    if (!created) {
      throw new Error('No se pudo crear cuenta de lealtad');
    }
    return created;
  }

  async createWelcomeAccount(userId: string) {
    await this.ensureSchema();

    const existing = await this._findAccount(userId);
    if (existing) return existing;

    const freeUntil = new Date();
    freeUntil.setDate(freeUntil.getDate() + this.newUserFreeShippingDays);

    try {
      await this.prisma.$transaction(async (tx) => {
        await tx.customer_loyalty_accounts.create({
          data: {
            user_id: userId,
            points_balance: this.signupBonusPoints,
            lifetime_points: this.signupBonusPoints,
            level: 'bronce',
            new_user_shipping_free_until: freeUntil,
          }
        });
        await tx.loyalty_point_transactions.create({
          data: {
            user_id: userId,
            type: 'bonus',
            points: this.signupBonusPoints,
            amount_soles: Number((this.signupBonusPoints / this.pointsPerSolRedeem).toFixed(2)),
            description: 'Bono de bienvenida por registro'
          }
        });
      });
    } catch (e: any) {
      // Ignore conflict
    }

    const created = await this._findAccount(userId);
    if (!created) {
      throw new Error('No se pudo crear cuenta de bienvenida');
    }
    return created;
  }

  async getLoyaltyOverview(
    userId: string,
    opts?: { consumeWelcomePopup?: boolean },
  ) {
    const consumePopup = opts?.consumeWelcomePopup ?? false;
    let account = await this.ensureAccount(userId);

    const computedLevel = this._levelFromLifetime(account.lifetime_points);
    if (account.level !== computedLevel) {
      await this.prisma.customer_loyalty_accounts.update({
        where: { user_id: userId },
        data: { level: computedLevel }
      });
      account = (await this._findAccount(userId)) ?? account;
    }

    const shippingDaysRemaining = this._daysRemaining(
      account.new_user_shipping_free_until,
    );
    const isNewUserShippingActive = shippingDaysRemaining > 0;

    const accountAgeDays = Math.floor(
      (Date.now() - new Date(account.created_at).getTime()) / (1000 * 60 * 60 * 24),
    );

    let showWelcomePopup = false;
    if (
      consumePopup &&
      isNewUserShippingActive &&
      accountAgeDays <= this.welcomePopupDays &&
      !account.welcome_popup_last_shown_at
    ) {
      showWelcomePopup = true;
      await this.prisma.customer_loyalty_accounts.update({
        where: { user_id: userId },
        data: { welcome_popup_last_shown_at: new Date() }
      });
    }

    const next = this._nextLevelInfo(account.lifetime_points);

    return {
      points_balance: account.points_balance,
      lifetime_points: account.lifetime_points,
      level: account.level,
      level_label: this._levelBenefits(account.level).title,
      level_description: this._levelBenefits(account.level).description,
      points_value_soles: Number(
        (account.points_balance / this.pointsPerSolRedeem).toFixed(2),
      ),
      points_per_10_soles: 1000,
      conversion_rate: {
        points_per_1_sol: this.pointsPerSolRedeem,
        points_per_10_soles: 1000,
      },
      next_level: next.next_level,
      points_to_next_level: next.points_to_next_level,
      is_new_user_shipping_active: isNewUserShippingActive,
      new_user_shipping_days_remaining: shippingDaysRemaining,
      new_user_shipping_free_until: account.new_user_shipping_free_until,
      welcome_popup: {
        show: showWelcomePopup,
        message:
          'Por ser usuario nuevo tienes envios gratis por 5 dias en toda la tienda FastGo.',
      },
    };
  }

  async getRedeemableProducts(userId: string) {
    const overview = await this.getLoyaltyOverview(userId);
    const pointsBalance = overview.points_balance;

    const products = await this.prisma.catalog_items.findMany({
      where: { is_active: true },
      take: 40,
      orderBy: { created_at: 'desc' },
      include: {
        stores: { select: { id: true, name: true } },
      },
    });

    const items = products.map((p) => {
      const base = Number(p.base_price_amount);
      const offer = p.offer_price_amount !== null ? Number(p.offer_price_amount) : null;
      const effective = p.is_on_offer && offer !== null && offer > 0 ? offer : base;
      const pointsRequired = Math.ceil(effective * this.pointsPerSolRedeem);

      return {
        id: p.id,
        name: p.name,
        image_url: p.image_url,
        store_id: p.stores.id,
        store_name: p.stores.name,
        effective_price_soles: Number(effective.toFixed(2)),
        points_required: pointsRequired,
        can_redeem: pointsBalance >= pointsRequired,
      };
    });

    return {
      points_balance: pointsBalance,
      conversion: {
        points_per_1_sol: this.pointsPerSolRedeem,
        points_per_10_soles: 1000,
      },
      items,
    };
  }

  async previewOrderLoyalty(
    userId: string,
    subtotal: number,
    requestedPoints: number,
  ) {
    const overview = await this.getLoyaltyOverview(userId);
    const availablePoints = overview.points_balance;

    const pointsRequested = Math.max(0, Math.floor(requestedPoints || 0));
    const maxBySubtotal = Math.floor(Math.max(0, subtotal) * this.pointsPerSolRedeem);
    const redeemPoints = Math.min(pointsRequested, availablePoints, maxBySubtotal);
    const redeemSoles = redeemPoints / this.pointsPerSolRedeem;
    const earnPoints = Math.max(
      0,
      Math.floor((Math.max(0, subtotal - redeemSoles)) * this.pointsPerSolEarn),
    );

    return {
      redeem_points: redeemPoints,
      redeem_soles: Number(redeemSoles.toFixed(2)),
      earn_points: earnPoints,
      loyalty: overview,
    };
  }

  resolveDeliveryFee(
    subtotal: number,
    loyalty: { level: string; is_new_user_shipping_active: boolean },
  ) {
    if (loyalty.is_new_user_shipping_active) return 0;
    if (loyalty.level === 'platino') return 0;
    if (loyalty.level === 'oro' && subtotal >= 35) return 0;
    return 5;
  }

  async applyOrderLoyalty(
    userId: string,
    orderId: string,
    redeemPoints: number,
    redeemSoles: number,
    earnPoints: number,
  ) {
    await this.ensureSchema();
    const account = await this.ensureAccount(userId);

    const finalBalance = Math.max(0, account.points_balance - redeemPoints + earnPoints);
    const finalLifetime = Math.max(0, account.lifetime_points + earnPoints);
    const level = this._levelFromLifetime(finalLifetime);

    await this.prisma.$transaction(async (tx) => {
      await tx.customer_loyalty_accounts.update({
        where: { user_id: userId },
        data: {
          points_balance: finalBalance,
          lifetime_points: finalLifetime,
          level: level,
        }
      });

      if (redeemPoints > 0) {
        await tx.loyalty_point_transactions.create({
          data: {
            user_id: userId,
            order_id: orderId,
            type: 'redeem',
            points: -redeemPoints,
            amount_soles: redeemSoles,
            description: 'Canje de puntos en pedido'
          }
        });
      }

      if (earnPoints > 0) {
        await tx.loyalty_point_transactions.create({
          data: {
            user_id: userId,
            order_id: orderId,
            type: 'earn',
            points: earnPoints,
            amount_soles: Number((earnPoints / this.pointsPerSolRedeem).toFixed(2)),
            description: 'Puntos ganados por pedido'
          }
        });
      }
    });

    this.logger.log(
      `Loyalty aplicado user=${userId} order=${orderId} redeem=${redeemPoints} earn=${earnPoints}`,
    );
  }
}
