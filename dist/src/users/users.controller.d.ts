import { UsersService } from './users.service';
import { UpdateUserDto, AssignRoleDto } from './dto';
import { PaginationDto } from '../common/dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMe(userId: string): Promise<{
        roles: {
            code: string;
            name: string;
            scope_type: import("@prisma/client").$Enums.role_scope_type;
            scope_id: string | null;
        }[];
        user_roles: undefined;
        email: string | null;
        id: string;
        created_at: Date;
        status: import("@prisma/client").$Enums.user_status_type;
        phone_e164: string | null;
        auth_provider: import("@prisma/client").$Enums.auth_provider_type;
        first_name: string;
        last_name: string | null;
        photo_url: string | null;
        is_phone_verified: boolean;
        is_email_verified: boolean;
    }>;
    updateMe(userId: string, dto: UpdateUserDto): Promise<{
        email: string | null;
        id: string;
        status: import("@prisma/client").$Enums.user_status_type;
        phone_e164: string | null;
        first_name: string;
        last_name: string | null;
        photo_url: string | null;
    }>;
    findAll(pagination: PaginationDto): Promise<{
        data: {
            email: string | null;
            id: string;
            created_at: Date;
            status: import("@prisma/client").$Enums.user_status_type;
            phone_e164: string | null;
            auth_provider: import("@prisma/client").$Enums.auth_provider_type;
            first_name: string;
            last_name: string | null;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        roles: {
            code: string;
            name: string;
            scope_type: import("@prisma/client").$Enums.role_scope_type;
            scope_id: string | null;
        }[];
        user_roles: undefined;
        email: string | null;
        id: string;
        created_at: Date;
        status: import("@prisma/client").$Enums.user_status_type;
        phone_e164: string | null;
        auth_provider: import("@prisma/client").$Enums.auth_provider_type;
        first_name: string;
        last_name: string | null;
        photo_url: string | null;
        is_phone_verified: boolean;
        is_email_verified: boolean;
    }>;
    assignRole(id: string, dto: AssignRoleDto): Promise<{
        message: string;
    }>;
    removeRole(id: string, roleCode: string): Promise<{
        message: string;
    }>;
}
