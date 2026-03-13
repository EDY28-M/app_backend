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
exports.CartsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CartsService = class CartsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrCreateCart(userId, storeId, branchId) {
        const branch = await this.prisma.store_branches.findFirst({
            where: { id: branchId, store_id: storeId, status: 'active' },
        });
        if (!branch)
            throw new common_1.BadRequestException('Sucursal no válida');
        let cart = await this.prisma.carts.findFirst({
            where: {
                customer_user_id: userId,
                store_id: storeId,
                branch_id: branchId,
                status: 'active',
            },
            include: {
                cart_items: {
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
        if (!cart) {
            cart = await this.prisma.carts.create({
                data: {
                    customer_user_id: userId,
                    store_id: storeId,
                    branch_id: branchId,
                },
                include: {
                    cart_items: {
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
        }
        return this._formatCart(cart);
    }
    async addItem(userId, dto) {
        const branchCatalog = await this.prisma.branch_catalog_items.findFirst({
            where: {
                id: dto.branch_catalog_item_id,
                branch_id: dto.branch_id,
                catalog_item_id: dto.catalog_item_id,
                is_available: true,
            },
        });
        if (!branchCatalog)
            throw new common_1.BadRequestException('Producto no disponible');
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
        const price = Number(branchCatalog.price_amount);
        const existing = await this.prisma.cart_items.findFirst({
            where: {
                cart_id: cart.id,
                catalog_item_id: dto.catalog_item_id,
                variant_id: dto.variant_id ?? null,
                branch_catalog_item_id: dto.branch_catalog_item_id,
            },
        });
        if (existing) {
            await this.prisma.cart_items.update({
                where: { id: existing.id },
                data: { qty: existing.qty + dto.qty, notes: dto.notes ?? existing.notes },
            });
        }
        else {
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
    async updateItem(userId, itemId, dto) {
        const item = await this.prisma.cart_items.findFirst({
            where: {
                id: itemId,
                carts: {
                    customer_user_id: userId,
                    status: 'active',
                },
            },
        });
        if (!item)
            throw new common_1.NotFoundException('Item no encontrado');
        if (dto.qty !== undefined) {
            if (dto.qty < 1) {
                await this.prisma.cart_items.delete({ where: { id: itemId } });
                const cart = await this.prisma.carts.findUnique({
                    where: { id: item.cart_id },
                });
                if (cart)
                    return this.getOrCreateCart(userId, cart.store_id, cart.branch_id);
                return { items: [], subtotal: 0, total: 0, store_name: null };
            }
            await this.prisma.cart_items.update({
                where: { id: itemId },
                data: { qty: dto.qty, ...(dto.notes !== undefined && { notes: dto.notes }) },
            });
        }
        else if (dto.notes !== undefined) {
            await this.prisma.cart_items.update({
                where: { id: itemId },
                data: { notes: dto.notes },
            });
        }
        const cart = await this.prisma.carts.findUnique({
            where: { id: item.cart_id },
        });
        return cart
            ? this.getOrCreateCart(userId, cart.store_id, cart.branch_id)
            : { items: [], subtotal: 0, total: 0, store_name: null };
    }
    async removeItem(userId, itemId) {
        const item = await this.prisma.cart_items.findFirst({
            where: {
                id: itemId,
                carts: { customer_user_id: userId, status: 'active' },
            },
        });
        if (!item)
            throw new common_1.NotFoundException('Item no encontrado');
        await this.prisma.cart_items.delete({ where: { id: itemId } });
        const cart = await this.prisma.carts.findUnique({
            where: { id: item.cart_id },
        });
        return cart
            ? this.getOrCreateCart(userId, cart.store_id, cart.branch_id)
            : { items: [], subtotal: 0, total: 0, store_name: null };
    }
    async getMyCarts(userId) {
        const carts = await this.prisma.carts.findMany({
            where: { customer_user_id: userId, status: 'active' },
            include: {
                cart_items: {
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
    _formatCart(cart) {
        const items = cart.cart_items.map((ci) => {
            const price = typeof ci.unit_price_amount === 'object'
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
};
exports.CartsService = CartsService;
exports.CartsService = CartsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CartsService);
//# sourceMappingURL=carts.service.js.map