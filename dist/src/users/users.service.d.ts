import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto, AssignRoleDto } from './dto';
import { PaginationDto } from '../common/dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getMe(userId: string): Promise<{
        roles: {
            code: string;
            name: string;
            scope_type: import("@prisma/client").$Enums.role_scope_type;
            scope_id: string | null;
        }[];
        user_roles: undefined;
        email: string | null;
        first_name: string;
        last_name: string | null;
        auth_provider: import("@prisma/client").$Enums.auth_provider_type;
        phone_e164: string | null;
        id: string;
        photo_url: string | null;
        status: import("@prisma/client").$Enums.user_status_type;
        is_phone_verified: boolean;
        is_email_verified: boolean;
        created_at: Date;
    }>;
    updateMe(userId: string, dto: UpdateUserDto): Promise<{
        email: string | null;
        first_name: string;
        last_name: string | null;
        phone_e164: string | null;
        id: string;
        photo_url: string | null;
        status: import("@prisma/client").$Enums.user_status_type;
    }>;
    findOne(userId: string): Promise<{
        roles: {
            code: string;
            name: string;
            scope_type: import("@prisma/client").$Enums.role_scope_type;
            scope_id: string | null;
        }[];
        user_roles: undefined;
        email: string | null;
        first_name: string;
        last_name: string | null;
        auth_provider: import("@prisma/client").$Enums.auth_provider_type;
        phone_e164: string | null;
        id: string;
        photo_url: string | null;
        status: import("@prisma/client").$Enums.user_status_type;
        is_phone_verified: boolean;
        is_email_verified: boolean;
        created_at: Date;
    }>;
    findAll(pagination: PaginationDto): Promise<{
        data: {
            email: string | null;
            first_name: string;
            last_name: string | null;
            auth_provider: import("@prisma/client").$Enums.auth_provider_type;
            phone_e164: string | null;
            id: string;
            status: import("@prisma/client").$Enums.user_status_type;
            created_at: Date;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    assignRole(userId: string, dto: AssignRoleDto): Promise<{
        message: string;
    }>;
    removeRole(userId: string, roleCode: string): Promise<{
        message: string;
    }>;
}
