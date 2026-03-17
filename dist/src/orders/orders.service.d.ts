import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto';
export declare class OrdersService {
    private prisma;
    constructor(prisma: PrismaService);
    private _toEffectivePrice;
    create(userId: string, dto: CreateOrderDto): Promise<{
        id: string;
        order_code: string;
        status: string;
        payment_status: string;
        fulfillment_status: string;
        subtotal: number;
        total: number;
        created_at: Date;
        store_name: string;
        branch_name: string;
        eta_minutes: number | null | undefined;
        items: {
            name: string;
            variant: string | null;
            qty: number;
            line_total: number;
        }[];
        rider: {
            name: string;
            rating: number | null;
        } | null;
    }>;
    findMyOrders(userId: string, tab?: 'active' | 'history'): Promise<{
        id: string;
        order_code: string;
        status: string;
        payment_status: string;
        fulfillment_status: string;
        subtotal: number;
        total: number;
        created_at: Date;
        store_name: string;
        branch_name: string;
        eta_minutes: number | null | undefined;
        items: {
            name: string;
            variant: string | null;
            qty: number;
            line_total: number;
        }[];
        rider: {
            name: string;
            rating: number | null;
        } | null;
    }[]>;
    findOne(userId: string, orderId: string): Promise<{
        id: string;
        order_code: string;
        status: string;
        payment_status: string;
        fulfillment_status: string;
        subtotal: number;
        total: number;
        created_at: Date;
        store_name: string;
        branch_name: string;
        eta_minutes: number | null | undefined;
        items: {
            name: string;
            variant: string | null;
            qty: number;
            line_total: number;
        }[];
        rider: {
            name: string;
            rating: number | null;
        } | null;
    }>;
    private _formatOrder;
}
