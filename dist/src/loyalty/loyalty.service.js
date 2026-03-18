"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LoyaltyService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let LoyaltyService = LoyaltyService_1 = class LoyaltyService {
    prisma;
    logger = new common_1.Logger(LoyaltyService_1.name);
    schemaReady = false;
    signupBonusPoints = 200;
    pointsPerSolRedeem = 100;
    pointsPerSolEarn = 5;
    newUserFreeShippingDays = 15;
    welcomePopupDays = 5;
    goldMinLifetimePoints = 1000;
    platinumMinLifetimePoints = 3000;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async ensureSchema() {
        this.schemaReady = true;
    }
    _levelFromLifetime(lifetimePoints) {
        if (lifetimePoints >= this.platinumMinLifetimePoints)
            return 'platino';
        if (lifetimePoints >= this.goldMinLifetimePoints)
            return 'oro';
        return 'bronce';
    }
    _nextLevelInfo(lifetimePoints) {
        if (lifetimePoints < this.goldMinLifetimePoints) {
            return {
                next_level: 'oro',
                points_to_next_level: this.goldMinLifetimePoints - lifetimePoints,
            };
        }
        if (lifetimePoints < this.platinumMinLifetimePoints) {
            return {
                next_level: 'platino',
                points_to_next_level: this.platinumMinLifetimePoints - lifetimePoints,
            };
        }
        return {
            next_level: null,
            points_to_next_level: 0,
        };
    }
    _levelBenefits(level) {
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
    _daysRemaining(until) {
        if (!until)
            return 0;
        const ms = until.getTime() - Date.now();
        if (ms <= 0)
            return 0;
        return Math.ceil(ms / (1000 * 60 * 60 * 24));
    }
    async _findAccount(userId) {
        const account = await this.prisma.customer_loyalty_accounts.findUnique({
            where: { user_id: userId }
        });
        if (!account)
            return null;
        return {
            ...account,
            level: account.level
        };
    }
    async ensureAccount(userId) {
        await this.ensureSchema();
        const existing = await this._findAccount(userId);
        if (existing)
            return existing;
        try {
            await this.prisma.customer_loyalty_accounts.create({
                data: {
                    user_id: userId,
                    points_balance: 0,
                    lifetime_points: 0,
                    level: 'bronce'
                }
            });
        }
        catch (e) {
        }
        const created = await this._findAccount(userId);
        if (!created) {
            throw new Error('No se pudo crear cuenta de lealtad');
        }
        return created;
    }
    async createWelcomeAccount(userId) {
        await this.ensureSchema();
        const existing = await this._findAccount(userId);
        if (existing)
            return existing;
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
        }
        catch (e) {
        }
        const created = await this._findAccount(userId);
        if (!created) {
            throw new Error('No se pudo crear cuenta de bienvenida');
        }
        return created;
    }
    async getLoyaltyOverview(userId, opts) {
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
        const shippingDaysRemaining = this._daysRemaining(account.new_user_shipping_free_until);
        const isNewUserShippingActive = shippingDaysRemaining > 0;
        const accountAgeDays = Math.floor((Date.now() - new Date(account.created_at).getTime()) / (1000 * 60 * 60 * 24));
        let showWelcomePopup = false;
        if (consumePopup &&
            isNewUserShippingActive &&
            accountAgeDays <= this.welcomePopupDays &&
            !account.welcome_popup_last_shown_at) {
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
            points_value_soles: Number((account.points_balance / this.pointsPerSolRedeem).toFixed(2)),
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
                message: 'Por ser usuario nuevo tienes envios gratis por 5 dias en toda la tienda FastGo.',
            },
        };
    }
    async getRedeemableProducts(userId) {
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
    async previewOrderLoyalty(userId, subtotal, requestedPoints) {
        const overview = await this.getLoyaltyOverview(userId);
        const availablePoints = overview.points_balance;
        const pointsRequested = Math.max(0, Math.floor(requestedPoints || 0));
        const maxBySubtotal = Math.floor(Math.max(0, subtotal) * this.pointsPerSolRedeem);
        const redeemPoints = Math.min(pointsRequested, availablePoints, maxBySubtotal);
        const redeemSoles = redeemPoints / this.pointsPerSolRedeem;
        const earnPoints = Math.max(0, Math.floor((Math.max(0, subtotal - redeemSoles)) * this.pointsPerSolEarn));
        return {
            redeem_points: redeemPoints,
            redeem_soles: Number(redeemSoles.toFixed(2)),
            earn_points: earnPoints,
            loyalty: overview,
        };
    }
    resolveDeliveryFee(subtotal, loyalty) {
        if (loyalty.is_new_user_shipping_active)
            return 0;
        if (loyalty.level === 'platino')
            return 0;
        if (loyalty.level === 'oro' && subtotal >= 35)
            return 0;
        return 5;
    }
    async applyOrderLoyalty(userId, orderId, redeemPoints, redeemSoles, earnPoints) {
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
        this.logger.log(`Loyalty aplicado user=${userId} order=${orderId} redeem=${redeemPoints} earn=${earnPoints}`);
    }
};
exports.LoyaltyService = LoyaltyService;
exports.LoyaltyService = LoyaltyService = LoyaltyService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LoyaltyService);
//# sourceMappingURL=loyalty.service.js.map