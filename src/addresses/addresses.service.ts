import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto, UpdateAddressDto } from './dto';

@Injectable()
export class AddressesService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateAddressDto) {
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

  async findAllByUser(userId: string) {
    return this.prisma.addresses.findMany({
      where: { user_id: userId },
      orderBy: [{ is_default: 'desc' }, { created_at: 'desc' }],
    });
  }

  async update(userId: string, addressId: string, dto: UpdateAddressDto) {
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

  async remove(userId: string, addressId: string) {
    await this.findAndVerifyOwnership(userId, addressId);
    await this.prisma.addresses.delete({ where: { id: addressId } });
    return { message: 'Dirección eliminada correctamente' };
  }

  async setDefault(userId: string, addressId: string) {
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

  private async findAndVerifyOwnership(userId: string, addressId: string) {
    const address = await this.prisma.addresses.findUnique({
      where: { id: addressId },
    });

    if (!address) throw new NotFoundException('Dirección no encontrada');
    if (address.user_id !== userId) {
      throw new ForbiddenException('No tienes acceso a esta dirección');
    }

    return address;
  }
}
