import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto, LoginDto, SendOtpDto, VerifyOtpDto, GoogleAuthDto } from './dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    private configService;
    private readonly logger;
    private readonly googleClient;
    private readonly twilioClient;
    private readonly twilioPhone;
    constructor(prisma: PrismaService, jwtService: JwtService, configService: ConfigService);
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
    refreshTokens(refreshToken: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    logout(userId: string): Promise<{
        message: string;
    }>;
    private generateTokens;
    private createSession;
    private getUserRoles;
    private verifyOtpInternal;
}
