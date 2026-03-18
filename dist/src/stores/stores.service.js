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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoresService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let StoresService = class StoresService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async searchProducts(query, limit = 40) {
        const q = query.trim();
        if (!q)
            return [];
        const safeLimit = Math.max(1, Math.min(limit, 100));
        const like = `%${q}%`;
        return this.prisma.$queryRaw `
      SELECT
        ci.id,
        ci.name,
        ci.image_url,
        ci.description,
        bci.price_amount::numeric AS price,
        ci.is_on_offer,
        ci.offer_price_amount::numeric AS offer_price_amount,
        s.id AS store_id,
        s.name AS store_name,
        sb.id AS branch_id,
        bci.id AS branch_catalog_item_id,
        cc.name AS catalog_category_name,
        bc.name AS business_category_name
      FROM branch_catalog_items bci
      INNER JOIN store_branches sb ON sb.id = bci.branch_id
      INNER JOIN stores s ON s.id = sb.store_id
      INNER JOIN catalog_items ci ON ci.id = bci.catalog_item_id
      LEFT JOIN catalog_categories cc ON cc.id = ci.category_id
      LEFT JOIN business_categories bc ON bc.id = s.business_category_id
      WHERE
        bci.is_available = true
        AND sb.status = 'active'
        AND sb.accepts_orders = true
        AND s.status = 'active'
        AND ci.is_active = true
        AND (
          ci.name ILIKE ${like}
          OR COALESCE(ci.description, '') ILIKE ${like}
          OR COALESCE(cc.name, '') ILIKE ${like}
          OR s.name ILIKE ${like}
          OR COALESCE(bc.name, '') ILIKE ${like}
        )
      ORDER BY
        CASE WHEN LOWER(ci.name) = LOWER(${q}) THEN 0 ELSE 1 END,
        CASE WHEN LOWER(ci.name) LIKE LOWER(${q}) || '%' THEN 0 ELSE 1 END,
        ci.is_on_offer DESC,
        ci.updated_at DESC
      LIMIT ${safeLimit}
    `;
    }
    async findPopular(categoryCode, limit = 20) {
        const where = {
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
            image_url: s.cover_image_url ||
                s.store_branches[0]?.branch_catalog_items[0]?.catalog_items?.image_url ||
                s.catalog_items?.[0]?.image_url ||
                null,
        }));
    }
    async findPopularProducts(limit = 20) {
        const items = await this.prisma.catalog_items.findMany({
            where: {
                is_active: true,
                stores: {
                    status: 'active',
                    store_branches: {
                        some: { status: 'active', accepts_orders: true },
                    },
                },
            },
            include: {
                branch_catalog_items: {
                    take: 1,
                },
                stores: {
                    include: {
                        business_categories: {
                            select: { name: true },
                        },
                        store_branches: {
                            where: { status: 'active', accepts_orders: true },
                            take: 1,
                            select: { id: true },
                        },
                    },
                },
            },
            take: limit,
            orderBy: { created_at: 'desc' },
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
            business_category_name: i.stores.business_categories?.name ?? 'General',
            branch_id: i.stores.store_branches[0]?.id ?? null,
            branch_catalog_item_id: i.branch_catalog_items[0]?.id ?? null,
        }));
    }
    async findOne(slug) {
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
        if (!store)
            throw new common_1.NotFoundException('Tienda no encontrada');
        return {
            ...store,
            avg_rating: store.avg_rating ? Number(store.avg_rating) : null,
            min_order_amount: store.min_order_amount
                ? Number(store.min_order_amount)
                : null,
        };
    }
    async getCategories() {
        return this.prisma.$queryRaw `
      SELECT id, code, name, is_active, logo_url, bg_color, created_at
      FROM business_categories
      WHERE is_active = true
      ORDER BY name ASC
    `;
    }
    async getProductsByCategory(categoryCode, limit = 20) {
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
                branch_catalog_items: {
                    take: 1,
                },
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
            branch_catalog_item_id: i.branch_catalog_items[0]?.id ?? null,
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
                branch_catalog_items: {
                    take: 1,
                },
                stores: {
                    include: {
                        business_categories: true,
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
            category_name: i.stores.business_categories?.name ?? 'Varios',
            branch_id: i.stores.store_branches[0]?.id ?? null,
            branch_catalog_item_id: i.branch_catalog_items[0]?.id ?? null,
        }));
    }
    async getCatalogItems(storeId, branchId) {
        const items = await this.prisma.branch_catalog_items.findMany({
            where: {
                branch_id: branchId,
                is_available: true,
                store_branches: { store_id: storeId, status: 'active' },
            },
            orderBy: [
                { sort_order: 'asc' },
                { catalog_items: { name: 'asc' } },
            ],
            include: {
                catalog_items: {
                    include: {
                        catalog_categories: {
                            select: {
                                name: true,
                                sort_order: true,
                            },
                        },
                    },
                },
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
                category_name: bci.catalog_items.catalog_categories?.name ?? 'General',
                category_sort_order: bci.catalog_items.catalog_categories?.sort_order ?? 999,
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
        const catalogItems = await this.prisma.catalog_items.findMany({
            where: {
                store_id: storeId,
                is_active: true,
            },
            include: {
                catalog_categories: {
                    select: {
                        name: true,
                        sort_order: true,
                    },
                },
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
            category_name: ci.catalog_categories?.name ?? 'General',
            category_sort_order: ci.catalog_categories?.sort_order ?? 999,
            price: Number(ci.base_price_amount),
            is_on_offer: ci.is_on_offer,
            offer_price_amount: ci.offer_price_amount ? Number(ci.offer_price_amount) : null,
            variant: null,
        }));
    }
    async getStoreProductCategories(storeId) {
        return this.prisma.catalog_categories.findMany({
            where: { store_id: storeId, is_active: true },
            orderBy: { sort_order: 'asc' },
        });
    }
};
exports.StoresService = StoresService;
exports.StoresService = StoresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StoresService);
//# sourceMappingURL=stores.service.js.map