import { PrismaService } from '../prisma/prisma.service';
export declare class StoresService {
    private prisma;
    constructor(prisma: PrismaService);
    findPopular(categoryCode?: string, limit?: number): Promise<{
        id: string;
        name: string;
        slug: string;
        description: string | null;
        logo_url: string | null;
        cover_image_url: string | null;
        category: {
            code: string;
            name: string;
        };
        avg_rating: number | null;
        total_reviews: number;
        min_order_amount: number | null;
        prep_time_min: number;
        branch_id: string;
        image_url: string | null;
    }[]>;
    findOne(slug: string): Promise<{
        avg_rating: number | null;
        min_order_amount: number | null;
        business_categories: {
            code: string;
            name: string;
        };
        store_branches: ({
            addresses: {
                id: string;
                user_id: string | null;
                label: string | null;
                contact_name: string | null;
                contact_phone: string | null;
                country_code: string;
                region: string;
                province: string;
                district: string;
                city: string;
                address_line1: string;
                address_line2: string | null;
                reference: string | null;
                latitude: import("@prisma/client-runtime-utils").Decimal;
                longitude: import("@prisma/client-runtime-utils").Decimal;
                is_default: boolean;
                created_at: Date;
                updated_at: Date;
            };
        } & {
            id: string;
            created_at: Date;
            updated_at: Date;
            name: string;
            store_id: string;
            status: import("@prisma/client").$Enums.branch_status_type;
            phone_e164: string | null;
            address_id: string;
            manager_user_id: string | null;
            accepts_orders: boolean;
            avg_prep_time_minutes: number;
            max_concurrent_orders: number | null;
        })[];
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        status: import("@prisma/client").$Enums.store_status_type;
        slug: string;
        description: string | null;
        logo_url: string | null;
        merchant_id: string;
        business_category_id: string;
        cover_image_url: string | null;
        service_mode: import("@prisma/client").$Enums.service_mode_type;
        catalog_mode: import("@prisma/client").$Enums.catalog_mode_type;
        total_reviews: number;
    }>;
    getCategories(): Promise<{
        id: string;
        created_at: Date;
        is_active: boolean;
        code: string;
        name: string;
    }[]>;
    getCatalogItems(storeId: string, branchId: string): Promise<{
        id: string;
        branch_catalog_item_id: string;
        name: string;
        image_url: string | null;
        description: string | null;
        item_type: import("@prisma/client").$Enums.item_type_enum;
        price: number;
        variant: {
            id: string;
            name: string;
        } | null;
    }[]>;
}
