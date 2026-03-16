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
exports.FavoritesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FavoritesService = class FavoritesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async add(userId, storeId) {
        const store = await this.prisma.stores.findFirst({
            where: { id: storeId, status: 'active' },
        });
        if (!store)
            throw new common_1.NotFoundException('Tienda no encontrada');
        const existing = await this.prisma.customer_favorites.findUnique({
            where: { user_id_store_id: { user_id: userId, store_id: storeId } },
        });
        if (existing)
            throw new common_1.ConflictException('Ya está en favoritos');
        return this.prisma.customer_favorites.create({
            data: { user_id: userId, store_id: storeId },
            include: {
                stores: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        cover_image_url: true,
                        avg_rating: true,
                        total_reviews: true,
                        store_branches: {
                            where: { status: 'active' },
                            take: 1,
                            select: { id: true },
                        },
                    },
                },
            },
        });
    }
    async remove(userId, storeId) {
        const fav = await this.prisma.customer_favorites.findUnique({
            where: { user_id_store_id: { user_id: userId, store_id: storeId } },
        });
        if (!fav)
            throw new common_1.NotFoundException('No está en favoritos');
        await this.prisma.customer_favorites.delete({
            where: { id: fav.id },
        });
        return { success: true };
    }
    async list(userId) {
        const favs = await this.prisma.customer_favorites.findMany({
            where: { user_id: userId },
            include: {
                stores: {
                    include: {
                        business_categories: { select: { code: true, name: true } },
                        store_branches: {
                            where: { status: 'active' },
                            take: 1,
                            include: {
                                branch_catalog_items: {
                                    where: { is_available: true },
                                    take: 1,
                                    include: {
                                        catalog_items: { select: { image_url: true, name: true } },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            orderBy: { created_at: 'desc' },
        });
        return favs.map((f) => ({
            id: f.stores.id,
            name: f.stores.name,
            slug: f.stores.slug,
            category: f.stores.business_categories,
            avg_rating: f.stores.avg_rating ? Number(f.stores.avg_rating) : null,
            branch_id: f.stores.store_branches[0]?.id ?? null,
            image_url: f.stores.cover_image_url ||
                f.stores.store_branches[0]?.branch_catalog_items[0]?.catalog_items?.image_url ||
                null,
        }));
    }
    async isFavorite(userId, storeId) {
        const fav = await this.prisma.customer_favorites.findUnique({
            where: { user_id_store_id: { user_id: userId, store_id: storeId } },
        });
        return !!fav;
    }
    async getFavoriteStoreIds(userId) {
        const favs = await this.prisma.customer_favorites.findMany({
            where: { user_id: userId },
            select: { store_id: true },
        });
        return favs.map((f) => f.store_id);
    }
};
exports.FavoritesService = FavoritesService;
exports.FavoritesService = FavoritesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FavoritesService);
//# sourceMappingURL=favorites.service.js.map