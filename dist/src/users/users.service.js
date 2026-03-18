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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const loyalty_service_1 = require("../loyalty/loyalty.service");
let UsersService = class UsersService {
    prisma;
    loyaltyService;
    constructor(prisma, loyaltyService) {
        this.prisma = prisma;
        this.loyaltyService = loyaltyService;
    }
    async getMe(userId) {
        const user = await this.prisma.users.findUnique({
            where: { id: userId },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                phone_e164: true,
                photo_url: true,
                status: true,
                auth_provider: true,
                is_phone_verified: true,
                is_email_verified: true,
                created_at: true,
                user_roles: {
                    include: { roles: { select: { code: true, name: true } } },
                },
            },
        });
        if (!user)
            throw new common_1.NotFoundException('Usuario no encontrado');
        const loyalty = await this.loyaltyService.getLoyaltyOverview(userId);
        return {
            ...user,
            loyalty,
            roles: user.user_roles.map((ur) => ({
                code: ur.roles.code,
                name: ur.roles.name,
                scope_type: ur.scope_type,
                scope_id: ur.scope_id,
            })),
            user_roles: undefined,
        };
    }
    async updateMe(userId, dto) {
        const user = await this.prisma.users.findUnique({
            where: { id: userId },
        });
        if (!user)
            throw new common_1.NotFoundException('Usuario no encontrado');
        if (dto.email && dto.email !== user.email) {
            const exists = await this.prisma.users.findUnique({
                where: { email: dto.email },
            });
            if (exists)
                throw new common_1.ConflictException('El email ya está en uso');
        }
        if (dto.phone_e164 && dto.phone_e164 !== user.phone_e164) {
            const exists = await this.prisma.users.findUnique({
                where: { phone_e164: dto.phone_e164 },
            });
            if (exists)
                throw new common_1.ConflictException('El teléfono ya está en uso');
        }
        const updated = await this.prisma.users.update({
            where: { id: userId },
            data: {
                ...(dto.first_name && { first_name: dto.first_name }),
                ...(dto.last_name !== undefined && { last_name: dto.last_name }),
                ...(dto.email && { email: dto.email }),
                ...(dto.phone_e164 && { phone_e164: dto.phone_e164 }),
                ...(dto.photo_url !== undefined && { photo_url: dto.photo_url }),
            },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                phone_e164: true,
                photo_url: true,
                status: true,
            },
        });
        return updated;
    }
    async findOne(userId) {
        const user = await this.prisma.users.findUnique({
            where: { id: userId },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                phone_e164: true,
                photo_url: true,
                status: true,
                auth_provider: true,
                is_phone_verified: true,
                is_email_verified: true,
                created_at: true,
                user_roles: {
                    include: { roles: { select: { code: true, name: true } } },
                },
            },
        });
        if (!user)
            throw new common_1.NotFoundException('Usuario no encontrado');
        const loyalty = await this.loyaltyService.getLoyaltyOverview(userId);
        return {
            ...user,
            loyalty,
            roles: user.user_roles.map((ur) => ({
                code: ur.roles.code,
                name: ur.roles.name,
                scope_type: ur.scope_type,
                scope_id: ur.scope_id,
            })),
            user_roles: undefined,
        };
    }
    async findAll(pagination) {
        const { page = 1, limit = 20 } = pagination;
        const skip = (page - 1) * limit;
        const [users, total] = await Promise.all([
            this.prisma.users.findMany({
                skip,
                take: limit,
                where: { deleted_at: null },
                select: {
                    id: true,
                    first_name: true,
                    last_name: true,
                    email: true,
                    phone_e164: true,
                    status: true,
                    auth_provider: true,
                    created_at: true,
                },
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.users.count({ where: { deleted_at: null } }),
        ]);
        return {
            data: users,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async assignRole(userId, dto) {
        const user = await this.prisma.users.findUnique({
            where: { id: userId },
        });
        if (!user)
            throw new common_1.NotFoundException('Usuario no encontrado');
        const role = await this.prisma.roles.findUnique({
            where: { code: dto.role_code },
        });
        if (!role)
            throw new common_1.NotFoundException(`Rol '${dto.role_code}' no existe`);
        const existing = await this.prisma.user_roles.findFirst({
            where: {
                user_id: userId,
                role_id: role.id,
                scope_type: dto.scope_type,
                scope_id: dto.scope_id || null,
            },
        });
        if (existing)
            throw new common_1.ConflictException('El usuario ya tiene este rol');
        await this.prisma.user_roles.create({
            data: {
                user_id: userId,
                role_id: role.id,
                scope_type: dto.scope_type,
                scope_id: dto.scope_id || null,
            },
        });
        return { message: `Rol '${dto.role_code}' asignado correctamente` };
    }
    async removeRole(userId, roleCode) {
        const role = await this.prisma.roles.findUnique({
            where: { code: roleCode },
        });
        if (!role)
            throw new common_1.NotFoundException(`Rol '${roleCode}' no existe`);
        const userRole = await this.prisma.user_roles.findFirst({
            where: { user_id: userId, role_id: role.id },
        });
        if (!userRole)
            throw new common_1.NotFoundException('El usuario no tiene este rol');
        await this.prisma.user_roles.delete({ where: { id: userRole.id } });
        return { message: `Rol '${roleCode}' removido correctamente` };
    }
    async getMyLoyalty(userId) {
        return this.loyaltyService.getLoyaltyOverview(userId);
    }
    async getRedeemableProducts(userId) {
        return this.loyaltyService.getRedeemableProducts(userId);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        loyalty_service_1.LoyaltyService])
], UsersService);
//# sourceMappingURL=users.service.js.map