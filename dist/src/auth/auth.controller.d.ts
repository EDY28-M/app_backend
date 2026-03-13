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
