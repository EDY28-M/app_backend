import { AuthService } from './auth.service';
import { RegisterDto, LoginDto, SendOtpDto, VerifyOtpDto, RefreshTokenDto, GoogleAuthDto } from './dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        access_token: string;
        refresh_token: string;
        user: {
            id: string;
            first_name: string;
            last_name: string | null;
            email: string | null;
            phone_e164: string | null;
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
        };
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
        refresh_token: string;
        user: {
            id: any;
            first_name: any;
            last_name: any;
            email: any;
            phone_e164: any;
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
        };
    }>;
    sendOtp(dto: SendOtpDto): Promise<{
        dev_code?: string | undefined;
        message: string;
        expires_in_seconds: number;
    }>;
    verifyOtp(dto: VerifyOtpDto): Promise<{
        verified: boolean;
        message: string;
    }>;
    googleAuth(dto: GoogleAuthDto): Promise<{
        access_token: string;
        refresh_token: string;
        user: {
            id: string;
            first_name: string;
            last_name: string | null;
            email: string | null;
            phone_e164: string | null;
            photo_url: string | null;
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
        };
        is_new_user: boolean;
    }>;
    refresh(dto: RefreshTokenDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    logout(userId: string): Promise<{
        message: string;
    }>;
}
