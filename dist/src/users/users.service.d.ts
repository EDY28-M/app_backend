import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto, AssignRoleDto } from './dto';
import { PaginationDto } from '../common/dto';
import { LoyaltyService } from '../loyalty/loyalty.service';
export declare class UsersService {
    private prisma;
    private loyaltyService;
    constructor(prisma: PrismaService, loyaltyService: LoyaltyService);
    getMe(userId: string): Promise<{
        loyalty: {
            points_balance: number;
            lifetime_points: number;
            level: "bronce" | "oro" | "platino";
            level_label: string;
            level_description: string;
            points_value_soles: number;
            points_per_10_soles: number;
            conversion_rate: {
                points_per_1_sol: number;
                points_per_10_soles: number;
            };
            next_level: ("bronce" | "oro" | "platino") | null;
            points_to_next_level: number;
            is_new_user_shipping_active: boolean;
            new_user_shipping_days_remaining: number;
            new_user_shipping_free_until: Date | null;
            welcome_popup: {
                show: boolean;
                message: string;
            };
        };
        roles: {
            code: string;
            name: string;
            scope_type: import("@prisma/client").$Enums.role_scope_type;
            scope_id: string | null;
        }[];
        user_roles: undefined;
        id: string;
        created_at: Date;
        status: import("@prisma/client").$Enums.user_status_type;
        email: string | null;
        first_name: string;
        last_name: string | null;
        auth_provider: import("@prisma/client").$Enums.auth_provider_type;
        phone_e164: string | null;
        photo_url: string | null;
        is_phone_verified: boolean;
        is_email_verified: boolean;
    }>;
    updateMe(userId: string, dto: UpdateUserDto): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.user_status_type;
        email: string | null;
        first_name: string;
        last_name: string | null;
        phone_e164: string | null;
        photo_url: string | null;
    }>;
    findOne(userId: string): Promise<{
        loyalty: {
            points_balance: number;
            lifetime_points: number;
            level: "bronce" | "oro" | "platino";
            level_label: string;
            level_description: string;
            points_value_soles: number;
            points_per_10_soles: number;
            conversion_rate: {
                points_per_1_sol: number;
                points_per_10_soles: number;
            };
            next_level: ("bronce" | "oro" | "platino") | null;
            points_to_next_level: number;
            is_new_user_shipping_active: boolean;
            new_user_shipping_days_remaining: number;
            new_user_shipping_free_until: Date | null;
            welcome_popup: {
                show: boolean;
                message: string;
            };
        };
        roles: {
            code: string;
            name: string;
            scope_type: import("@prisma/client").$Enums.role_scope_type;
            scope_id: string | null;
        }[];
        user_roles: undefined;
        id: string;
        created_at: Date;
        status: import("@prisma/client").$Enums.user_status_type;
        email: string | null;
        first_name: string;
        last_name: string | null;
        auth_provider: import("@prisma/client").$Enums.auth_provider_type;
        phone_e164: string | null;
        photo_url: string | null;
        is_phone_verified: boolean;
        is_email_verified: boolean;
    }>;
    findAll(pagination: PaginationDto): Promise<{
        data: {
            id: string;
            created_at: Date;
            status: import("@prisma/client").$Enums.user_status_type;
            email: string | null;
            first_name: string;
            last_name: string | null;
            auth_provider: import("@prisma/client").$Enums.auth_provider_type;
            phone_e164: string | null;
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
    getMyLoyalty(userId: string): Promise<{
        points_balance: number;
        lifetime_points: number;
        level: "bronce" | "oro" | "platino";
        level_label: string;
        level_description: string;
        points_value_soles: number;
        points_per_10_soles: number;
        conversion_rate: {
            points_per_1_sol: number;
            points_per_10_soles: number;
        };
        next_level: ("bronce" | "oro" | "platino") | null;
        points_to_next_level: number;
        is_new_user_shipping_active: boolean;
        new_user_shipping_days_remaining: number;
        new_user_shipping_free_until: Date | null;
        welcome_popup: {
            show: boolean;
            message: string;
        };
    }>;
    getRedeemableProducts(userId: string): Promise<{
        points_balance: number;
        conversion: {
            points_per_1_sol: number;
            points_per_10_soles: number;
        };
        items: {
            id: string;
            name: string;
            image_url: string | null;
            store_id: string;
            store_name: string;
            effective_price_soles: number;
            points_required: number;
            can_redeem: boolean;
        }[];
    }>;
}
