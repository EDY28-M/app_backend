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
exports.AddressesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AddressesService = class AddressesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
        if (dto.is_default) {
            await this.prisma.addresses.updateMany({
                where: { user_id: userId, is_default: true },
                data: { is_default: false },
            });
        }
        const address = await this.prisma.addresses.create({
            data: {
                user_id: userId,
                label: dto.label,
                contact_name: dto.contact_name,
                contact_phone: dto.contact_phone,
                country_code: dto.country_code || 'PE',
                region: dto.region,
                province: dto.province,
                district: dto.district,
                city: dto.city,
                address_line1: dto.address_line1,
                address_line2: dto.address_line2,
                reference: dto.reference,
                latitude: dto.latitude,
                longitude: dto.longitude,
                is_default: dto.is_default || false,
            },
        });
        return address;
    }
    async findAllByUser(userId) {
        return this.prisma.addresses.findMany({
            where: { user_id: userId },
            orderBy: [{ is_default: 'desc' }, { created_at: 'desc' }],
        });
    }
    async update(userId, addressId, dto) {
        const address = await this.findAndVerifyOwnership(userId, addressId);
        if (dto.is_default) {
            await this.prisma.addresses.updateMany({
                where: { user_id: userId, is_default: true },
                data: { is_default: false },
            });
        }
        return this.prisma.addresses.update({
            where: { id: addressId },
            data: {
                ...(dto.label !== undefined && { label: dto.label }),
                ...(dto.contact_name !== undefined && {
                    contact_name: dto.contact_name,
                }),
                ...(dto.contact_phone !== undefined && {
                    contact_phone: dto.contact_phone,
                }),
                ...(dto.country_code && { country_code: dto.country_code }),
                ...(dto.region && { region: dto.region }),
                ...(dto.province && { province: dto.province }),
                ...(dto.district && { district: dto.district }),
                ...(dto.city && { city: dto.city }),
                ...(dto.address_line1 && { address_line1: dto.address_line1 }),
                ...(dto.address_line2 !== undefined && {
                    address_line2: dto.address_line2,
                }),
                ...(dto.reference !== undefined && { reference: dto.reference }),
                ...(dto.latitude !== undefined && { latitude: dto.latitude }),
                ...(dto.longitude !== undefined && { longitude: dto.longitude }),
                ...(dto.is_default !== undefined && { is_default: dto.is_default }),
            },
        });
    }
    async remove(userId, addressId) {
        await this.findAndVerifyOwnership(userId, addressId);
        await this.prisma.addresses.delete({ where: { id: addressId } });
        return { message: 'Dirección eliminada correctamente' };
    }
    async setDefault(userId, addressId) {
        await this.findAndVerifyOwnership(userId, addressId);
        await this.prisma.addresses.updateMany({
            where: { user_id: userId, is_default: true },
            data: { is_default: false },
        });
        const updated = await this.prisma.addresses.update({
            where: { id: addressId },
            data: { is_default: true },
        });
        return updated;
    }
    async findAndVerifyOwnership(userId, addressId) {
        const address = await this.prisma.addresses.findUnique({
            where: { id: addressId },
        });
        if (!address)
            throw new common_1.NotFoundException('Dirección no encontrada');
        if (address.user_id !== userId) {
            throw new common_1.ForbiddenException('No tienes acceso a esta dirección');
        }
        return address;
    }
};
exports.AddressesService = AddressesService;
exports.AddressesService = AddressesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AddressesService);
//# sourceMappingURL=addresses.service.js.map