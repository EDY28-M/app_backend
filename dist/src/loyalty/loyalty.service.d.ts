import { PrismaService } from '../prisma/prisma.service';
type LoyaltyLevel = 'bronce' | 'oro' | 'platino';
interface LoyaltyAccountRow {
    id: string;
    user_id: string;
    points_balance: number;
    lifetime_points: number;
    level: LoyaltyLevel;
    new_user_shipping_free_until: Date | null;
    welcome_popup_last_shown_at: Date | null;
    created_at: Date;
    updated_at: Date;
}
export declare class LoyaltyService {
    private prisma;
    private readonly logger;
    private schemaReady;
    readonly signupBonusPoints = 200;
    readonly pointsPerSolRedeem = 100;
    readonly pointsPerSolEarn = 5;
    readonly newUserFreeShippingDays = 15;
    readonly welcomePopupDays = 5;
    readonly goldMinLifetimePoints = 1000;
    readonly platinumMinLifetimePoints = 3000;
    constructor(prisma: PrismaService);
    ensureSchema(): Promise<void>;
    private _levelFromLifetime;
    private _nextLevelInfo;
    private _levelBenefits;
    private _daysRemaining;
    private _findAccount;
    ensureAccount(userId: string): Promise<LoyaltyAccountRow>;
    createWelcomeAccount(userId: string): Promise<LoyaltyAccountRow>;
    getLoyaltyOverview(userId: string, opts?: {
        consumeWelcomePopup?: boolean;
    }): Promise<{
        points_balance: number;
        lifetime_points: number;
        level: LoyaltyLevel;
        level_label: string;
        level_description: string;
        points_value_soles: number;
        points_per_10_soles: number;
        conversion_rate: {
            points_per_1_sol: number;
            points_per_10_soles: number;
        };
        next_level: LoyaltyLevel | null;
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
    previewOrderLoyalty(userId: string, subtotal: number, requestedPoints: number): Promise<{
        redeem_points: number;
        redeem_soles: number;
        earn_points: number;
        loyalty: {
            points_balance: number;
            lifetime_points: number;
            level: LoyaltyLevel;
            level_label: string;
            level_description: string;
            points_value_soles: number;
            points_per_10_soles: number;
            conversion_rate: {
                points_per_1_sol: number;
                points_per_10_soles: number;
            };
            next_level: LoyaltyLevel | null;
            points_to_next_level: number;
            is_new_user_shipping_active: boolean;
            new_user_shipping_days_remaining: number;
            new_user_shipping_free_until: Date | null;
            welcome_popup: {
                show: boolean;
                message: string;
            };
        };
    }>;
    resolveDeliveryFee(subtotal: number, loyalty: {
        level: string;
        is_new_user_shipping_active: boolean;
    }): 5 | 0;
    applyOrderLoyalty(userId: string, orderId: string, redeemPoints: number, redeemSoles: number, earnPoints: number): Promise<void>;
}
export {};
