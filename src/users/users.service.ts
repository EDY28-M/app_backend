import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto, AssignRoleDto } from './dto';
import { PaginationDto } from '../common/dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getMe(userId: string) {
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

    if (!user) throw new NotFoundException('Usuario no encontrado');

    return {
      ...user,
      roles: user.user_roles.map((ur) => ({
        code: ur.roles.code,
        name: ur.roles.name,
        scope_type: ur.scope_type,
        scope_id: ur.scope_id,
      })),
      user_roles: undefined,
    };
  }

  async updateMe(userId: string, dto: UpdateUserDto) {
    const user = await this.prisma.users.findUnique({
      where: { id: userId },
    });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    if (dto.email && dto.email !== user.email) {
      const exists = await this.prisma.users.findUnique({
        where: { email: dto.email },
      });
      if (exists) throw new ConflictException('El email ya está en uso');
    }

    if (dto.phone_e164 && dto.phone_e164 !== user.phone_e164) {
      const exists = await this.prisma.users.findUnique({
        where: { phone_e164: dto.phone_e164 },
      });
      if (exists) throw new ConflictException('El teléfono ya está en uso');
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

  async findOne(userId: string) {
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

    if (!user) throw new NotFoundException('Usuario no encontrado');

    return {
      ...user,
      roles: user.user_roles.map((ur) => ({
        code: ur.roles.code,
        name: ur.roles.name,
        scope_type: ur.scope_type,
        scope_id: ur.scope_id,
      })),
      user_roles: undefined,
    };
  }

  async findAll(pagination: PaginationDto) {
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

  async assignRole(userId: string, dto: AssignRoleDto) {
    const user = await this.prisma.users.findUnique({
      where: { id: userId },
    });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    const role = await this.prisma.roles.findUnique({
      where: { code: dto.role_code },
    });
    if (!role) throw new NotFoundException(`Rol '${dto.role_code}' no existe`);

    const existing = await this.prisma.user_roles.findFirst({
      where: {
        user_id: userId,
        role_id: role.id,
        scope_type: dto.scope_type as any,
        scope_id: dto.scope_id || null,
      },
    });
    if (existing) throw new ConflictException('El usuario ya tiene este rol');

    await this.prisma.user_roles.create({
      data: {
        user_id: userId,
        role_id: role.id,
        scope_type: dto.scope_type as any,
        scope_id: dto.scope_id || null,
      },
    });

    return { message: `Rol '${dto.role_code}' asignado correctamente` };
  }

  async removeRole(userId: string, roleCode: string) {
    const role = await this.prisma.roles.findUnique({
      where: { code: roleCode },
    });
    if (!role) throw new NotFoundException(`Rol '${roleCode}' no existe`);

    const userRole = await this.prisma.user_roles.findFirst({
      where: { user_id: userId, role_id: role.id },
    });
    if (!userRole)
      throw new NotFoundException('El usuario no tiene este rol');

    await this.prisma.user_roles.delete({ where: { id: userRole.id } });

    return { message: `Rol '${roleCode}' removido correctamente` };
  }
}
