import { CartsService } from './carts.service';
import { AddCartItemDto, UpdateCartItemDto } from './dto';
export declare class CartsController {
    private readonly cartsService;
    constructor(cartsService: CartsService);
    getMyCarts(userId: string): Promise<{
        id: string;
        store_id: string;
        branch_id: string;
        store_name: string;
        items: {
            id: string;
            catalog_item_id: string;
            variant_id: string | null;
            branch_catalog_item_id: string;
            name: string;
            image_url: string | null;
            variant_name: string | undefined;
            qty: number;
            unit_price: number;
            line_total: number;
            notes: string | null;
        }[];
        subtotal: number;
        total: number;
        item_count: number;
    }[]>;
    getOrCreate(userId: string, storeId: string, branchId: string): Promise<{
        id: string;
        store_id: string;
        branch_id: string;
        store_name: string;
        items: {
            id: string;
            catalog_item_id: string;
            variant_id: string | null;
            branch_catalog_item_id: string;
            name: string;
            image_url: string | null;
            variant_name: string | undefined;
            qty: number;
            unit_price: number;
            line_total: number;
            notes: string | null;
        }[];
        subtotal: number;
        total: number;
        item_count: number;
    }>;
    addItem(userId: string, dto: AddCartItemDto): Promise<{
        id: string;
        store_id: string;
        branch_id: string;
        store_name: string;
        items: {
            id: string;
            catalog_item_id: string;
            variant_id: string | null;
            branch_catalog_item_id: string;
            name: string;
            image_url: string | null;
            variant_name: string | undefined;
            qty: number;
            unit_price: number;
            line_total: number;
            notes: string | null;
        }[];
        subtotal: number;
        total: number;
        item_count: number;
    }>;
    updateItem(userId: string, itemId: string, dto: UpdateCartItemDto): Promise<{
        id: string;
        store_id: string;
        branch_id: string;
        store_name: string;
        items: {
            id: string;
            catalog_item_id: string;
            variant_id: string | null;
            branch_catalog_item_id: string;
            name: string;
            image_url: string | null;
            variant_name: string | undefined;
            qty: number;
            unit_price: number;
            line_total: number;
            notes: string | null;
        }[];
        subtotal: number;
        total: number;
        item_count: number;
    } | {
        items: never[];
        subtotal: number;
        total: number;
        store_name: null;
    }>;
    removeItem(userId: string, itemId: string): Promise<{
        id: string;
        store_id: string;
        branch_id: string;
        store_name: string;
        items: {
            id: string;
            catalog_item_id: string;
            variant_id: string | null;
            branch_catalog_item_id: string;
            name: string;
            image_url: string | null;
            variant_name: string | undefined;
            qty: number;
            unit_price: number;
            line_total: number;
            notes: string | null;
        }[];
        subtotal: number;
        total: number;
        item_count: number;
    } | {
        items: never[];
        subtotal: number;
        total: number;
        store_name: null;
    }>;
}
