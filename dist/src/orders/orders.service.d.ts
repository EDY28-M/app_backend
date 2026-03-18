import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto';
import { LoyaltyService } from '../loyalty/loyalty.service';
export declare class OrdersService {
    private prisma;
    private loyaltyService;
    private readonly logger;
    constructor(prisma: PrismaService, loyaltyService: LoyaltyService);
    private _toEffectivePrice;
    create(userId: string, dto: CreateOrderDto): Promise<{
        id: string;
        order_code: string;
        status: string;
        payment_status: string;
        fulfillment_status: string;
        subtotal: number;
        delivery_fee: number;
        discount: number;
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
        delivery_fee: number;
        discount: number;
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
        delivery_fee: number;
        discount: number;
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
