import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto';
import { order_status_type } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateOrderDto) {
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
    if (!address) throw new BadRequestException('Dirección no válida');

    const user = await this.prisma.users.findUnique({
      where: { id: userId },
      select: { first_name: true, last_name: true, phone_e164: true, email: true },
    });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    const customerName = [user.first_name, user.last_name].filter(Boolean).join(' ');
    const customerPhone = user.phone_e164 ?? user.email ?? '';

    const orderCode = `FG-${Date.now().toString(36).toUpperCase()}`;

    const subtotal = cart.cart_items.reduce((s, ci) => {
      const p = Number(ci.unit_price_amount);
      return s + p * ci.qty;
    }, 0);

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
          discount_amount: 0,
          delivery_fee_amount: 0,
          service_fee_amount: 0,
          tip_amount: 0,
          total_amount: subtotal,
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

    for (const ci of cart.cart_items) {
      const lineTotal = Number(ci.unit_price_amount) * ci.qty;
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
          base_unit_price_amount: ci.unit_price_amount,
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
