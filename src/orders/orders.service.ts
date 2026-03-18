import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto';
import { order_status_type } from '@prisma/client';
import { LoyaltyService } from '../loyalty/loyalty.service';

@Injectable()
export class OrdersService {
  private readonly logger = new Logger(OrdersService.name);

  constructor(
    private prisma: PrismaService,
    private loyaltyService: LoyaltyService,
  ) {}

  private _toEffectivePrice(input: {
    basePrice: unknown;
    isOnOffer: boolean;
    offerPrice: unknown;
  }) {
    const base = Number(input.basePrice);
    const offer =
      input.offerPrice !== null && input.offerPrice !== undefined
        ? Number(input.offerPrice)
        : null;
    if (input.isOnOffer && offer !== null && offer > 0) {
      return offer;
    }
    return base;
  }

  async create(userId: string, dto: CreateOrderDto) {
    const addressCount = await this.prisma.addresses.count({
      where: { user_id: userId },
    });
    if (addressCount === 0) {
      throw new BadRequestException({
        code: 'ADDRESS_REQUIRED',
        message: 'Debes agregar una direccion antes de pagar.',
      });
    }

    if (!dto.delivery_address_id) {
      throw new BadRequestException({
        code: 'ADDRESS_REQUIRED',
        message: 'Selecciona una direccion de entrega para continuar.',
      });
    }

    const cart = await this.prisma.carts.findFirst({
      where: {
        id: dto.cart_id,
        customer_user_id: userId,
        status: 'active',
      },
      include: {
        cart_items: {
          include: {
            catalog_items: true,
            catalog_item_variants: true,
            branch_catalog_items: true,
          },
        },
        stores: { include: { business_categories: true } },
      },
    });

    if (!cart || cart.cart_items.length === 0)
      throw new BadRequestException('Carrito vacío o no encontrado');

    const address = await this.prisma.addresses.findFirst({
      where: { id: dto.delivery_address_id, user_id: userId },
    });
    if (!address) {
      throw new BadRequestException({
        code: 'ADDRESS_REQUIRED',
        message: 'La direccion seleccionada no es valida para este usuario.',
      });
    }

    const user = await this.prisma.users.findUnique({
      where: { id: userId },
      select: { first_name: true, last_name: true, phone_e164: true, email: true },
    });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    const customerName = [user.first_name, user.last_name]
      .filter(Boolean)
      .join(' ')
      .trim();
    // customer_phone_snapshot is varchar(20), so keep a bounded value.
    const customerPhone = (user.phone_e164 ?? user.email ?? '')
      .trim()
      .slice(0, 20);

    const orderCode = `FG-${Date.now().toString(36).toUpperCase()}`;

    const repricedItems = cart.cart_items.map((ci) => {
      const effective = this._toEffectivePrice({
        basePrice: ci.branch_catalog_items.price_amount,
        isOnOffer: ci.catalog_items.is_on_offer,
        offerPrice: ci.catalog_items.offer_price_amount,
      });
      return {
        ...ci,
        effective_unit_price: effective,
      };
    });

    const priceUpdates: Array<ReturnType<typeof this.prisma.cart_items.update>> =
      [];
    for (const ci of repricedItems) {
      if (Number(ci.unit_price_amount) === ci.effective_unit_price) continue;
      priceUpdates.push(
        this.prisma.cart_items.update({
          where: { id: ci.id },
          data: { unit_price_amount: ci.effective_unit_price },
        }),
      );
    }
    if (priceUpdates.length > 0) {
      await this.prisma.$transaction(priceUpdates);
    }

    const subtotal = repricedItems.reduce((s, ci) => {
      return s + ci.effective_unit_price * ci.qty;
    }, 0);

    let loyaltyPreview = {
      redeem_points: 0,
      redeem_soles: 0,
      earn_points: 0,
      loyalty: {
        level: 'bronce',
        is_new_user_shipping_active: false,
      },
    };
    let deliveryFee = 0;

    try {
      const preview = await this.loyaltyService.previewOrderLoyalty(
        userId,
        subtotal,
        dto.points_to_redeem ?? 0,
      );
      loyaltyPreview = {
        ...preview,
        loyalty: {
          level: preview.loyalty.level,
          is_new_user_shipping_active:
            preview.loyalty.is_new_user_shipping_active,
        },
      };
      deliveryFee = this.loyaltyService.resolveDeliveryFee(subtotal, {
        level: loyaltyPreview.loyalty.level,
        is_new_user_shipping_active:
          loyaltyPreview.loyalty.is_new_user_shipping_active,
      });
    } catch (error) {
      this.logger.error(
        `Loyalty preview failed for user ${userId}, continuing without loyalty`,
        error instanceof Error ? error.stack : undefined,
      );
    }

    const totalAmount = Math.max(
      0,
      subtotal + deliveryFee - loyaltyPreview.redeem_soles,
    );

    const [order] = await this.prisma.$transaction([
      this.prisma.orders.create({
        data: {
          order_code: orderCode,
          customer_user_id: userId,
          store_id: cart.store_id,
          branch_id: cart.branch_id,
          delivery_address_id: dto.delivery_address_id,
          source_channel: 'app',
          order_type: 'delivery',
          business_category_snapshot: cart.stores.business_categories.code,
          status: 'created',
          payment_status: 'pending',
          fulfillment_status: 'pending',
          subtotal_amount: subtotal,
          modifier_total_amount: 0,
          discount_amount: loyaltyPreview.redeem_soles,
          delivery_fee_amount: deliveryFee,
          service_fee_amount: 0,
          tip_amount: 0,
          total_amount: totalAmount,
          notes: dto.notes,
          customer_name_snapshot: customerName,
          customer_phone_snapshot: customerPhone,
        },
      }),
      this.prisma.carts.update({
        where: { id: cart.id },
        data: { status: 'converted' },
      }),
    ]);

    for (const ci of repricedItems) {
      const lineTotal = ci.effective_unit_price * ci.qty;
      await this.prisma.order_items.create({
        data: {
          order_id: order.id,
          catalog_item_id: ci.catalog_item_id,
          variant_id: ci.variant_id,
          branch_catalog_item_id: ci.branch_catalog_item_id,
          item_type: ci.catalog_items.item_type,
          item_name_snapshot: ci.catalog_items.name,
          variant_name_snapshot: ci.catalog_item_variants?.name,
          sku_snapshot: ci.catalog_items.sku,
          base_unit_price_amount: ci.effective_unit_price,
          modifier_unit_total_amount: 0,
          qty: ci.qty,
          line_total_amount: lineTotal,
          notes: ci.notes,
        },
      });
    }

    await this.prisma.order_status_history.create({
      data: {
        order_id: order.id,
        new_status: 'created',
        source: 'system',
      },
    });

    const branch = await this.prisma.store_branches.findUnique({
      where: { id: cart.branch_id },
      include: { addresses: true },
    });

    await this.prisma.deliveries.create({
      data: {
        order_id: order.id,
        pickup_branch_id: cart.branch_id,
        dropoff_address_id: dto.delivery_address_id,
        status: 'pending_assignment',
      },
    });

    try {
      await this.loyaltyService.applyOrderLoyalty(
        userId,
        order.id,
        loyaltyPreview.redeem_points,
        loyaltyPreview.redeem_soles,
        loyaltyPreview.earn_points,
      );
    } catch (error) {
      // Do not fail order creation if loyalty bookkeeping fails.
      this.logger.error(
        `Loyalty apply failed for order ${order.id}`,
        error instanceof Error ? error.stack : undefined,
      );
    }

    return this.findOne(userId, order.id);
  }

  async findMyOrders(userId: string, tab: 'active' | 'history' = 'active') {
    const statuses: order_status_type[] =
      tab === 'active'
        ? [
            'created',
            'pending_store_acceptance',
            'accepted_by_store',
            'preparing',
            'ready_for_pickup',
            'rider_assigned',
            'picked_up',
            'on_the_way',
          ]
        : ['delivered', 'cancelled', 'failed_delivery', 'returned_to_store'];

    const orders = await this.prisma.orders.findMany({
      where: { customer_user_id: userId, status: { in: statuses } },
      orderBy: { created_at: 'desc' },
      take: 50,
      include: {
        order_items: true,
        stores: { select: { name: true } },
        store_branches: { select: { name: true } },
        deliveries: {
          select: {
            status: true,
            estimated_minutes: true,
            rider_profiles: {
              include: {
                users: { select: { first_name: true, last_name: true } },
              },
            },
          },
        },
      },
    });

    return orders.map((o) => this._formatOrder(o));
  }

  async findOne(userId: string, orderId: string) {
    const order = await this.prisma.orders.findFirst({
      where: { id: orderId, customer_user_id: userId },
      include: {
        order_items: true,
        stores: { select: { name: true } },
        store_branches: { select: { name: true } },
        deliveries: {
          include: {
            rider_profiles: {
              include: {
                users: { select: { first_name: true, last_name: true } },
              },
            },
          },
        },
      },
    });

    if (!order) throw new NotFoundException('Pedido no encontrado');

    return this._formatOrder(order);
  }

  private _formatOrder(order: {
    id: string;
    order_code: string;
    status: string;
    payment_status: string;
    fulfillment_status: string;
    subtotal_amount: unknown;
    delivery_fee_amount: unknown;
    discount_amount: unknown;
    total_amount: unknown;
    created_at: Date;
    order_items: Array<{
      item_name_snapshot: string;
      variant_name_snapshot: string | null;
      qty: number;
      line_total_amount: unknown;
    }>;
    stores: { name: string };
    store_branches: { name: string };
    deliveries: {
      status: string;
      estimated_minutes: number | null;
      rider_profiles: {
        users: { first_name: string; last_name: string | null };
        rating_avg: unknown;
      } | null;
    } | null;
  }) {
    const delivery = order.deliveries;
    const rider = delivery?.rider_profiles;

    return {
      id: order.id,
      order_code: order.order_code,
      status: order.status,
      payment_status: order.payment_status,
      fulfillment_status: order.fulfillment_status,
      subtotal: Number(order.subtotal_amount),
      delivery_fee: Number(order.delivery_fee_amount),
      discount: Number(order.discount_amount),
      total: Number(order.total_amount),
      created_at: order.created_at,
      store_name: order.stores.name,
      branch_name: order.store_branches.name,
      eta_minutes: delivery?.estimated_minutes,
      items: order.order_items.map((i) => ({
        name: i.item_name_snapshot,
        variant: i.variant_name_snapshot,
        qty: i.qty,
        line_total: Number(i.line_total_amount),
      })),
      rider: rider
        ? {
            name: `${rider.users.first_name} ${rider.users.last_name}`.trim(),
            rating: rider.rating_avg ? Number(rider.rating_avg) : null,
          }
        : null,
    };
  }
}
