import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StoresService {
  constructor(private prisma: PrismaService) {}

  async findPopular(categoryCode?: string, limit = 20) {
    const where: Record<string, unknown> = {
      status: 'active',
      store_branches: {
        some: { status: 'active', accepts_orders: true },
      },
    };

    if (categoryCode) {
      where.business_categories = { code: categoryCode };
    }

    const stores = await this.prisma.stores.findMany({
      where,
      take: limit,
      orderBy: [{ avg_rating: 'desc' }, { total_reviews: 'desc' }],
      include: {
        business_categories: { select: { code: true, name: true } },
        catalog_items: {
          where: { is_active: true },
          take: 1,
          select: { image_url: true },
        },
        store_branches: {
          where: { status: 'active' },
          take: 1,
          include: {
            branch_catalog_items: {
              where: { is_available: true },
              take: 1,
              include: {
                catalog_items: {
                  select: { image_url: true, name: true },
                },
              },
            },
          },
        },
      },
    });

    return stores.map((s) => ({
      id: s.id,
      name: s.name,
      slug: s.slug,
      description: s.description,
      logo_url: s.logo_url,
      cover_image_url: s.cover_image_url,
      category: s.business_categories,
      avg_rating: s.avg_rating ? Number(s.avg_rating) : null,
      total_reviews: s.total_reviews,
      min_order_amount: s.min_order_amount ? Number(s.min_order_amount) : null,
      prep_time_min: s.store_branches[0]?.avg_prep_time_minutes ?? 20,
      branch_id: s.store_branches[0]?.id ?? null,
      image_url:
        s.cover_image_url ||
        s.store_branches[0]?.branch_catalog_items[0]?.catalog_items?.image_url ||
        (s as { catalog_items?: Array<{ image_url: string | null }> }).catalog_items?.[0]?.image_url ||
        null,
    }));
  }

  async findOne(slug: string) {
    const store = await this.prisma.stores.findUnique({
      where: { slug, status: 'active' },
      include: {
        business_categories: { select: { code: true, name: true } },
        store_branches: {
          where: { status: 'active', accepts_orders: true },
          include: {
            addresses: true,
          },
        },
      },
    });

    if (!store) throw new NotFoundException('Tienda no encontrada');

    return {
      ...store,
      avg_rating: store.avg_rating ? Number(store.avg_rating) : null,
      min_order_amount: store.min_order_amount
        ? Number(store.min_order_amount)
        : null,
    };
  }

  async getCategories() {
    return this.prisma.business_categories.findMany({
      where: { is_active: true },
      orderBy: { name: 'asc' },
    });
  }

  async getProductsByCategory(categoryCode: string, limit = 20) {
    const items = await this.prisma.catalog_items.findMany({
      where: {
        is_active: true,
        stores: {
          business_categories: { code: categoryCode },
          status: 'active',
          store_branches: {
            some: { status: 'active', accepts_orders: true },
          },
        },
      },
      include: {
        stores: {
          include: {
            store_branches: {
              where: { status: 'active', accepts_orders: true },
              take: 1,
              select: { id: true },
            },
          },
        },
      },
      take: limit,
      orderBy: { updated_at: 'desc' },
    });

    return items.map((i) => ({
      id: i.id,
      name: i.name,
      image_url: i.image_url,
      description: i.description,
      base_price_amount: Number(i.base_price_amount),
      offer_price_amount: i.offer_price_amount ? Number(i.offer_price_amount) : null,
      is_on_offer: i.is_on_offer,
      store_id: i.store_id,
      store_name: i.stores.name,
      branch_id: i.stores.store_branches[0]?.id ?? null,
    }));
  }

  async getOffers(limit = 30) {
    const items = await this.prisma.catalog_items.findMany({
      where: {
        is_on_offer: true,
        is_active: true,
        stores: {
          status: 'active',
          store_branches: {
            some: { status: 'active', accepts_orders: true },
          },
        },
      },
      include: {
        stores: {
          include: {
            store_branches: {
              where: { status: 'active', accepts_orders: true },
              take: 1,
              select: { id: true },
            },
          },
        },
      },
      take: limit,
      orderBy: { updated_at: 'desc' },
    });

    return items.map((i) => ({
      id: i.id,
      name: i.name,
      image_url: i.image_url,
      description: i.description,
      base_price_amount: Number(i.base_price_amount),
      offer_price_amount: i.offer_price_amount ? Number(i.offer_price_amount) : null,
      store_id: i.store_id,
      store_name: i.stores.name,
      branch_id: i.stores.store_branches[0]?.id ?? null,
    }));
  }

  async getCatalogItems(storeId: string, branchId: string) {
    const items = await this.prisma.branch_catalog_items.findMany({
      where: {
        branch_id: branchId,
        is_available: true,
        store_branches: { store_id: storeId, status: 'active' },
      },
      include: {
        catalog_items: true,
        catalog_item_variants: true,
      },
    });

    if (items.length > 0) {
      return items.map((bci) => ({
        id: bci.catalog_items.id,
        branch_catalog_item_id: bci.id,
        name: bci.catalog_items.name,
        image_url: bci.catalog_items.image_url,
        description: bci.catalog_items.description,
        item_type: bci.catalog_items.item_type,
        price: Number(bci.price_amount),
        is_on_offer: bci.catalog_items.is_on_offer,
        offer_price_amount: bci.catalog_items.offer_price_amount
          ? Number(bci.catalog_items.offer_price_amount)
          : null,
        variant: bci.catalog_item_variants
          ? { id: bci.catalog_item_variants.id, name: bci.catalog_item_variants.name }
          : null,
      }));
    }

    // Fallback: si no hay branch_catalog_items, devolver catalog_items de la tienda
    const catalogItems = await this.prisma.catalog_items.findMany({
      where: {
        store_id: storeId,
        is_active: true,
      },
      orderBy: { name: 'asc' },
    });

    return catalogItems.map((ci) => ({
      id: ci.id,
      branch_catalog_item_id: null,
      name: ci.name,
      image_url: ci.image_url,
      description: ci.description,
      item_type: ci.item_type,
      price: Number(ci.base_price_amount),
      is_on_offer: ci.is_on_offer,
      offer_price_amount: ci.offer_price_amount ? Number(ci.offer_price_amount) : null,
      variant: null,
    }));
  }
}
