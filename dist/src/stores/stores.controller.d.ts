import { StoresService } from './stores.service';
export declare class StoresController {
    private readonly storesService;
    constructor(storesService: StoresService);
    getCategories(): Promise<{
        code: string;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
    }[]>;
    findPopular(category?: string): Promise<{
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
    findPopularProducts(limit?: string): Promise<{
        id: string;
        name: string;
        image_url: string | null;
        description: string | null;
        base_price_amount: number;
        offer_price_amount: number | null;
        is_on_offer: boolean;
        store_id: string;
        store_name: string;
        branch_id: string;
        branch_catalog_item_id: string;
    }[]>;
    getOffers(limit?: string): Promise<{
        id: string;
        name: string;
        image_url: string | null;
        description: string | null;
        base_price_amount: number;
        offer_price_amount: number | null;
        is_on_offer: boolean;
        store_id: string;
        store_name: string;
        category_name: string;
        branch_id: string;
        branch_catalog_item_id: string;
    }[]>;
    getCatalog(storeId: string, branchId: string): Promise<{
        id: string;
        branch_catalog_item_id: string;
        name: string;
        image_url: string | null;
        description: string | null;
        item_type: import("@prisma/client").$Enums.item_type_enum;
        price: number;
        is_on_offer: boolean;
        offer_price_amount: number | null;
        variant: {
            id: string;
            name: string;
        } | null;
    }[] | {
        id: string;
        branch_catalog_item_id: null;
        name: string;
        image_url: string | null;
        description: string | null;
        item_type: import("@prisma/client").$Enums.item_type_enum;
        price: number;
        is_on_offer: boolean;
        offer_price_amount: number | null;
        variant: null;
    }[]>;
    getcategoryProducts(categoryCode: string, limit?: string): Promise<{
        id: string;
        name: string;
        image_url: string | null;
        description: string | null;
        base_price_amount: number;
        offer_price_amount: number | null;
        is_on_offer: boolean;
        store_id: string;
        store_name: string;
        branch_id: string;
        branch_catalog_item_id: string;
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
                created_at: Date;
                updated_at: Date;
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
            };
        } & {
            phone_e164: string | null;
            id: string;
            status: import("@prisma/client").$Enums.branch_status_type;
            created_at: Date;
            updated_at: Date;
            name: string;
            store_id: string;
            address_id: string;
            manager_user_id: string | null;
            accepts_orders: boolean;
            avg_prep_time_minutes: number;
            max_concurrent_orders: number | null;
        })[];
        description: string | null;
        id: string;
        status: import("@prisma/client").$Enums.store_status_type;
        created_at: Date;
        updated_at: Date;
        name: string;
        merchant_id: string;
        business_category_id: string;
        slug: string;
        logo_url: string | null;
        cover_image_url: string | null;
        service_mode: import("@prisma/client").$Enums.service_mode_type;
        catalog_mode: import("@prisma/client").$Enums.catalog_mode_type;
        total_reviews: number;
    }>;
    getStoreProductCategories(id: string): Promise<{
        id: string;
        created_at: Date;
        name: string;
        slug: string;
        is_active: boolean;
        store_id: string;
        sort_order: number;
        parent_id: string | null;
    }[]>;
}
