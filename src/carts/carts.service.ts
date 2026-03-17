import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddCartItemDto, UpdateCartItemDto } from './dto';

@Injectable()
export class CartsService {
  constructor(private prisma: PrismaService) {}

  async getOrCreateCart(userId: string, storeId: string, branchId: string) {
    const branch = await this.prisma.store_branches.findFirst({
      where: { id: branchId, store_id: storeId, status: 'active' },
    });
    if (!branch)
      throw new BadRequestException('Sucursal no válida');

    let cart = await this.prisma.carts.findFirst({
      where: {
        customer_user_id: userId,
        store_id: storeId,
        branch_id: branchId,
        status: 'active',
      },
      include: {
        cart_items: {
          orderBy: { created_at: 'asc' },
          include: {
            catalog_items: { select: { id: true, name: true, image_url: true } },
            catalog_item_variants: { select: { id: true, name: true } },
            branch_catalog_items: {
              select: { id: true, price_amount: true, stock_qty: true, availability_mode: true },
            },
          },
        },
        stores: { select: { name: true } },
      },
    });

    if (!cart) {
      cart = await this.prisma.carts.create({
        data: {
          customer_user_id: userId,
          store_id: storeId,
          branch_id: branchId,
        },
        include: {
          cart_items: {
            orderBy: { created_at: 'asc' },
            include: {
              catalog_items: { select: { id: true, name: true, image_url: true } },
              catalog_item_variants: { select: { id: true, name: true } },
              branch_catalog_items: {
                select: { id: true, price_amount: true, stock_qty: true, availability_mode: true },
              },
            },
          },
          stores: { select: { name: true } },
        },
      });
    }

    await this._syncCartPricesByCartId(cart.id);
    cart = await this.prisma.carts.findFirst({
      where: {
        customer_user_id: userId,
        store_id: storeId,
        branch_id: branchId,
        status: 'active',
      },
      include: {
        cart_items: {
          orderBy: { created_at: 'asc' },
          include: {
            catalog_items: { select: { id: true, name: true, image_url: true } },
            catalog_item_variants: { select: { id: true, name: true } },
            branch_catalog_items: {
              select: { id: true, price_amount: true, stock_qty: true, availability_mode: true },
            },
          },
        },
        stores: { select: { name: true } },
      },
    });
    if (!cart) throw new NotFoundException('Carrito no encontrado');

    return this._formatCart(cart);
  }

  async addItem(userId: string, dto: AddCartItemDto) {
    const branchCatalog = await this.prisma.branch_catalog_items.findFirst({
      where: {
        id: dto.branch_catalog_item_id,
        branch_id: dto.branch_id,
        catalog_item_id: dto.catalog_item_id,
        is_available: true,
      },
      include: {
        catalog_items: {
          select: { is_on_offer: true, offer_price_amount: true },
        },
      },
    });
    if (!branchCatalog)
      throw new BadRequestException('Producto no disponible');

    // Validación de stock
    if (branchCatalog.availability_mode === 'stock' && branchCatalog.stock_qty !== null) {
      if (branchCatalog.stock_qty < dto.qty) {
        throw new BadRequestException(`Stock insuficiente. Disponible: ${branchCatalog.stock_qty}`);
      }
    }

    let cart = await this.prisma.carts.findFirst({
      where: {
        customer_user_id: userId,
        store_id: dto.store_id,
        branch_id: dto.branch_id,
        status: 'active',
      },
    });

    if (!cart) {
      cart = await this.prisma.carts.create({
        data: {
          customer_user_id: userId,
          store_id: dto.store_id,
          branch_id: dto.branch_id,
        },
      });
    }

    const basePrice = Number(branchCatalog.price_amount);
    const offerPrice =
      branchCatalog.catalog_items.offer_price_amount !== null
        ? Number(branchCatalog.catalog_items.offer_price_amount)
        : null;
    const price =
      branchCatalog.catalog_items.is_on_offer &&
      offerPrice !== null &&
      offerPrice > 0
        ? offerPrice
        : basePrice;
    const existing = await this.prisma.cart_items.findFirst({
      where: {
        cart_id: cart.id,
        catalog_item_id: dto.catalog_item_id,
        variant_id: dto.variant_id ?? null,
        branch_catalog_item_id: dto.branch_catalog_item_id,
      },
    });

    if (existing) {
      const newQty = existing.qty + dto.qty;
      // Validar stock nuevamente para la cantidad total
      if (branchCatalog.availability_mode === 'stock' && branchCatalog.stock_qty !== null) {
        if (branchCatalog.stock_qty < newQty) {
          throw new BadRequestException(`Stock insuficiente para agregar más. Tienes ${existing.qty} en carrito, disponible: ${branchCatalog.stock_qty}`);
        }
      }

      await this.prisma.cart_items.update({
        where: { id: existing.id },
        data: {
          qty: newQty,
          unit_price_amount: price,
          notes: dto.notes ?? existing.notes,
        },
      });
    } else {
      await this.prisma.cart_items.create({
        data: {
          cart_id: cart.id,
          catalog_item_id: dto.catalog_item_id,
          variant_id: dto.variant_id,
          branch_catalog_item_id: dto.branch_catalog_item_id,
          qty: dto.qty,
          unit_price_amount: price,
          notes: dto.notes,
        },
      });
    }

    return this.getOrCreateCart(userId, dto.store_id, dto.branch_id);
  }

  async updateItem(
    userId: string,
    itemId: string,
    dto: UpdateCartItemDto,
  ) {
    const item = await this.prisma.cart_items.findFirst({
      where: {
        id: itemId,
        carts: {
          customer_user_id: userId,
          status: 'active',
        },
      },
      include: {
        branch_catalog_items: true,
      }
    });

    if (!item) throw new NotFoundException('Item no encontrado');

    const cartId = item.cart_id; // Guardar cart_id antes de borrar

    if (dto.qty !== undefined) {
      if (dto.qty < 1) {
        await this.prisma.cart_items.delete({ where: { id: itemId } });
      } else {
        // Validar stock
        const bci = item.branch_catalog_items;
        if (bci && bci.availability_mode === 'stock' && bci.stock_qty !== null) {
          if (bci.stock_qty < dto.qty) {
             throw new BadRequestException(`Stock insuficiente. Máximo disponible: ${bci.stock_qty}`);
          }
        }

        await this.prisma.cart_items.update({
          where: { id: itemId },
          data: { qty: dto.qty, ...(dto.notes !== undefined && { notes: dto.notes }) },
        });
      }
    } else if (dto.notes !== undefined) {
      await this.prisma.cart_items.update({
        where: { id: itemId },
        data: { notes: dto.notes },
      });
    }

    // Recuperar el carrito actualizado SIEMPRE
    const cart = await this.prisma.carts.findUnique({
      where: { id: cartId },
      include: {
        stores: { select: { name: true } }
      }
    });

    if (cart) {
      return this.getOrCreateCart(userId, cart.store_id, cart.branch_id);
    }
    
    // Fallback seguro si por alguna razón extraña el carrito no existe
    return { 
      items: [], 
      subtotal: 0, 
      total: 0, 
      store_name: null, 
      store_id: null, 
      branch_id: null, 
      item_count: 0 
    };
  }

  async removeItem(userId: string, itemId: string) {
    const item = await this.prisma.cart_items.findFirst({
      where: {
        id: itemId,
        carts: { customer_user_id: userId, status: 'active' },
      },
    });

    if (!item) throw new NotFoundException('Item no encontrado');

    const cartId = item.cart_id;
    await this.prisma.cart_items.delete({ where: { id: itemId } });

    const cart = await this.prisma.carts.findUnique({
      where: { id: cartId },
    });
    
    if (cart) {
      return this.getOrCreateCart(userId, cart.store_id, cart.branch_id);
    }

    return { 
      items: [], 
      subtotal: 0, 
      total: 0, 
      store_name: null, 
      store_id: null, 
      branch_id: null, 
      item_count: 0 
    };
  }

  async getMyCarts(userId: string) {
    await this._syncCartPricesByUser(userId);
    const carts = await this.prisma.carts.findMany({
      where: { customer_user_id: userId, status: 'active' },
      include: {
        cart_items: {
          orderBy: { created_at: 'asc' },
          include: {
            catalog_items: { select: { id: true, name: true, image_url: true } },
            catalog_item_variants: { select: { id: true, name: true } },
            branch_catalog_items: {
              select: { id: true, price_amount: true },
            },
          },
        },
        stores: { select: { name: true } },
      },
    });

    return carts.map((c) => this._formatCart(c));
  }

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

  private async _syncCartPricesByCartId(cartId: string) {
    const cartItems = await this.prisma.cart_items.findMany({
      where: { cart_id: cartId },
      select: {
        id: true,
        unit_price_amount: true,
        branch_catalog_item_id: true,
      },
    });
    await this._syncCartItemPrices(cartItems);
  }

  private async _syncCartPricesByUser(userId: string) {
    const cartItems = await this.prisma.cart_items.findMany({
      where: {
        carts: {
          customer_user_id: userId,
          status: 'active',
        },
      },
      select: {
        id: true,
        unit_price_amount: true,
        branch_catalog_item_id: true,
      },
    });
    await this._syncCartItemPrices(cartItems);
  }

  private async _syncCartItemPrices(
    cartItems: Array<{
      id: string;
      unit_price_amount: unknown;
      branch_catalog_item_id: string;
    }>,
  ) {
    if (cartItems.length === 0) return;

    const branchCatalogIds = [
      ...new Set(cartItems.map((ci) => ci.branch_catalog_item_id)),
    ];
    const catalogRows = await this.prisma.branch_catalog_items.findMany({
      where: { id: { in: branchCatalogIds } },
      select: {
        id: true,
        price_amount: true,
        catalog_items: {
          select: { is_on_offer: true, offer_price_amount: true },
        },
      },
    });
    const byBranchCatalogId = new Map(catalogRows.map((r) => [r.id, r]));

    const updates: Array<ReturnType<typeof this.prisma.cart_items.update>> = [];
    for (const ci of cartItems) {
      const row = byBranchCatalogId.get(ci.branch_catalog_item_id);
      if (!row) continue;
      const effective = this._toEffectivePrice({
        basePrice: row.price_amount,
        isOnOffer: row.catalog_items.is_on_offer,
        offerPrice: row.catalog_items.offer_price_amount,
      });
      const current = Number(ci.unit_price_amount);
      if (current === effective) continue;
      updates.push(
        this.prisma.cart_items.update({
          where: { id: ci.id },
          data: { unit_price_amount: effective },
        }),
      );
    }

    if (updates.length > 0) {
      await this.prisma.$transaction(updates);
    }
  }

  private _formatCart(cart: {
    id: string;
    store_id: string;
    branch_id: string;
    cart_items: Array<{
      id: string;
      catalog_item_id: string;
      variant_id: string | null;
      branch_catalog_item_id: string;
      qty: number;
      unit_price_amount: { toNumber: () => number } | number;
      notes: string | null;
      catalog_items: { name: string; image_url: string | null };
      catalog_item_variants: { name: string } | null;
      branch_catalog_items: { price_amount: { toNumber: () => number } | number };
    }>;
    stores: { name: string };
  }) {
    const items = cart.cart_items.map((ci) => {
      const price =
        typeof ci.unit_price_amount === 'object'
          ? ci.unit_price_amount.toNumber?.() ?? Number(ci.unit_price_amount)
          : Number(ci.unit_price_amount);
      return {
        id: ci.id,
        catalog_item_id: ci.catalog_item_id,
        variant_id: ci.variant_id,
        branch_catalog_item_id: ci.branch_catalog_item_id,
        name: ci.catalog_items.name,
        image_url: ci.catalog_items.image_url,
        variant_name: ci.catalog_item_variants?.name,
        qty: ci.qty,
        unit_price: price,
        line_total: price * ci.qty,
        notes: ci.notes,
      };
    });

    const subtotal = items.reduce((s, i) => s + i.line_total, 0);

    return {
      id: cart.id,
      store_id: cart.store_id,
      branch_id: cart.branch_id,
      store_name: cart.stores.name,
      items,
      subtotal,
      total: subtotal,
      item_count: items.reduce((s, i) => s + i.qty, 0),
    };
  }
}
