"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcrypt"));
const google_auth_library_1 = require("google-auth-library");
const twilio_1 = require("twilio");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = AuthService_1 = class AuthService {
    prisma;
    jwtService;
    configService;
    logger = new common_1.Logger(AuthService_1.name);
    googleClient;
    twilioClient;
    twilioPhone;
    constructor(prisma, jwtService, configService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.configService = configService;
        const clientId = this.configService.get('GOOGLE_CLIENT_ID');
        this.googleClient = new google_auth_library_1.OAuth2Client(clientId);
        const accountSid = this.configService.get('TWILIO_ACCOUNT_SID');
        const authToken = this.configService.get('TWILIO_AUTH_TOKEN');
        this.twilioPhone = this.configService.get('TWILIO_PHONE_NUMBER') || null;
        if (accountSid && authToken) {
            this.twilioClient = new twilio_1.Twilio(accountSid, authToken);
            this.logger.log('Twilio configurado correctamente');
        }
        else {
            this.twilioClient = null;
        }
    }
    async register(dto) {
        if (dto.phone_e164) {
            const exists = await this.prisma.users.findUnique({
                where: { phone_e164: dto.phone_e164 },
            });
            if (exists)
                throw new common_1.ConflictException('El teléfono ya está registrado');
        }
        if (dto.email) {
            const exists = await this.prisma.users.findUnique({
                where: { email: dto.email },
            });
            if (exists)
                throw new common_1.ConflictException('El email ya está registrado');
        }
        let passwordHash = null;
        if (dto.password) {
            passwordHash = await bcrypt.hash(dto.password, 10);
        }
        const user = await this.prisma.users.create({
            data: {
                first_name: dto.first_name,
                last_name: dto.last_name,
                phone_e164: dto.phone_e164,
                email: dto.email,
                password_hash: passwordHash,
                auth_provider: dto.auth_provider,
                status: 'active',
            },
        });
        const customerRole = await this.prisma.roles.findUnique({
            where: { code: 'customer' },
        });
        if (customerRole) {
            await this.prisma.user_roles.create({
                data: {
                    user_id: user.id,
                    role_id: customerRole.id,
                    scope_type: 'platform',
                },
            });
        }
        const tokens = await this.generateTokens(user.id, ['customer']);
        await this.createSession(user.id, tokens.refresh_token);
        return {
            user: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                phone_e164: user.phone_e164,
            },
            ...tokens,
        };
    }
    async login(dto) {
        let user;
        if (dto.phone_e164) {
            user = await this.prisma.users.findUnique({
                where: { phone_e164: dto.phone_e164 },
            });
        }
        else if (dto.email) {
            user = await this.prisma.users.findUnique({
                where: { email: dto.email },
            });
        }
        if (!user) {
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        if (user.status !== 'active') {
            throw new common_1.UnauthorizedException('Cuenta no activa');
        }
        if (dto.password) {
            if (!user.password_hash) {
                throw new common_1.BadRequestException('Esta cuenta no usa contraseña. Intenta con OTP o Google.');
            }
            const valid = await bcrypt.compare(dto.password, user.password_hash);
            if (!valid)
                throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        else if (dto.otp_code) {
            await this.verifyOtpInternal(dto.phone_e164 || dto.email, dto.otp_code, 'login');
        }
        else {
            throw new common_1.BadRequestException('Debes proporcionar password o otp_code');
        }
        await this.prisma.users.update({
            where: { id: user.id },
            data: { last_login_at: new Date() },
        });
        const roles = await this.getUserRoles(user.id);
        const tokens = await this.generateTokens(user.id, roles);
        await this.createSession(user.id, tokens.refresh_token);
        return {
            user: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                phone_e164: user.phone_e164,
            },
            ...tokens,
        };
    }
    async sendOtp(dto) {
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        const codeHash = await bcrypt.hash(otpCode, 10);
        const expiryMinutes = this.configService.get('OTP_EXPIRY_MINUTES', 5);
        let userId = null;
        const user = await this.prisma.users.findFirst({
            where: {
                OR: [{ phone_e164: dto.target }, { email: dto.target }],
            },
        });
        if (user)
            userId = user.id;
        await this.prisma.otp_verifications.create({
            data: {
                user_id: userId,
                target: dto.target,
                channel: dto.channel,
                purpose: dto.purpose,
                code_hash: codeHash,
                expires_at: new Date(Date.now() + expiryMinutes * 60 * 1000),
            },
        });
        const provider = this.configService.get('OTP_PROVIDER', 'local');
        if (provider === 'twilio') {
            if (!this.twilioClient || !this.twilioPhone) {
                throw new common_1.BadRequestException('Twilio no configurado. Revisa TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN y TWILIO_PHONE_NUMBER en .env');
            }
            try {
                await this.twilioClient.messages.create({
                    body: `Tu codigo de verificacion es: ${otpCode}. Expira en ${expiryMinutes} minutos.`,
                    from: this.twilioPhone,
                    to: dto.target,
                });
                this.logger.log(`SMS enviado a ${dto.target} via Twilio`);
            }
            catch (error) {
                this.logger.error(`Error enviando SMS via Twilio: ${error?.message}`);
                const code = error?.code ?? error?.status;
                if (code === 21608 || code === 21614 || error?.message?.includes('verified')) {
                    throw new common_1.BadRequestException('Cuenta Twilio Trial: solo puedes enviar SMS a números verificados. ' +
                        'Añade el número en https://console.twilio.com o usa OTP_PROVIDER=local para pruebas.');
                }
                throw new common_1.BadRequestException('No se pudo enviar el SMS. Verifica el numero de telefono.');
            }
        }
        else {
            this.logger.warn(`[DEV] OTP para ${dto.target}: ${otpCode}`);
        }
        return {
            message: 'Código OTP enviado',
            expires_in_seconds: expiryMinutes * 60,
            ...(provider === 'local' ? { dev_code: otpCode } : {}),
        };
    }
    async verifyOtp(dto) {
        const verified = await this.verifyOtpInternal(dto.target, dto.code, dto.purpose);
        return { verified, message: 'OTP verificado correctamente' };
    }
    async googleAuth(dto) {
        const clientId = this.configService.get('GOOGLE_CLIENT_ID');
        if (!clientId) {
            throw new common_1.BadRequestException('Google Sign-In no configurado. Agrega GOOGLE_CLIENT_ID en .env (usa el Web Client ID de Google Cloud Console)');
        }
        let payload;
        try {
            const ticket = await this.googleClient.verifyIdToken({
                idToken: dto.id_token,
                audience: clientId,
            });
            payload = ticket.getPayload();
        }
        catch {
            throw new common_1.UnauthorizedException('Token de Google inválido o expirado');
        }
        if (!payload || !payload.sub) {
            throw new common_1.UnauthorizedException('No se pudo verificar la identidad de Google');
        }
        const googleSub = payload.sub;
        const email = payload.email || null;
        const firstName = payload.given_name || payload.name || 'Usuario';
        const lastName = payload.family_name || null;
        const photoUrl = payload.picture || null;
        let user = await this.prisma.users.findUnique({
            where: { google_sub: googleSub },
        });
        if (!user && email) {
            user = await this.prisma.users.findUnique({
                where: { email },
            });
            if (user) {
                await this.prisma.users.update({
                    where: { id: user.id },
                    data: {
                        google_sub: googleSub,
                        photo_url: user.photo_url || photoUrl,
                        is_email_verified: true,
                    },
                });
            }
        }
        if (!user) {
            user = await this.prisma.users.create({
                data: {
                    google_sub: googleSub,
                    email,
                    first_name: firstName,
                    last_name: lastName,
                    photo_url: photoUrl,
                    auth_provider: 'google',
                    status: 'active',
                    is_email_verified: !!email,
                },
            });
            const customerRole = await this.prisma.roles.findUnique({
                where: { code: 'customer' },
            });
            if (customerRole) {
                await this.prisma.user_roles.create({
                    data: {
                        user_id: user.id,
                        role_id: customerRole.id,
                        scope_type: 'platform',
                    },
                });
            }
        }
        if (user.status !== 'active') {
            throw new common_1.UnauthorizedException('Cuenta suspendida o eliminada');
        }
        await this.prisma.users.update({
            where: { id: user.id },
            data: { last_login_at: new Date() },
        });
        const roles = await this.getUserRoles(user.id);
        const tokens = await this.generateTokens(user.id, roles);
        await this.createSession(user.id, tokens.refresh_token);
        return {
            user: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                phone_e164: user.phone_e164,
                photo_url: user.photo_url,
            },
            is_new_user: !user.last_login_at,
            ...tokens,
        };
    }
    async refreshTokens(refreshToken) {
        try {
            const payload = this.jwtService.verify(refreshToken, {
                secret: this.configService.getOrThrow('JWT_REFRESH_SECRET'),
            });
            const session = await this.prisma.user_sessions.findFirst({
                where: {
                    user_id: payload.sub,
                    revoked_at: null,
                    expires_at: { gt: new Date() },
                },
                orderBy: { created_at: 'desc' },
            });
            if (!session) {
                throw new common_1.UnauthorizedException('Sesión no válida o expirada');
            }
            const user = await this.prisma.users.findUnique({
                where: { id: payload.sub },
            });
            if (!user || user.status !== 'active') {
                throw new common_1.UnauthorizedException('Usuario no válido');
            }
            await this.prisma.user_sessions.update({
                where: { id: session.id },
                data: { revoked_at: new Date() },
            });
            const roles = await this.getUserRoles(user.id);
            const tokens = await this.generateTokens(user.id, roles);
            await this.createSession(user.id, tokens.refresh_token);
            return tokens;
        }
        catch {
            throw new common_1.UnauthorizedException('Refresh token inválido o expirado');
        }
    }
    async logout(userId) {
        await this.prisma.user_sessions.updateMany({
            where: { user_id: userId, revoked_at: null },
            data: { revoked_at: new Date() },
        });
        return { message: 'Sesión cerrada correctamente' };
    }
    async generateTokens(userId, roles) {
        const payload = { sub: userId, roles };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: this.configService.getOrThrow('JWT_SECRET'),
                expiresIn: this.configService.get('JWT_EXPIRES_IN', '15m'),
            }),
            this.jwtService.signAsync(payload, {
                secret: this.configService.getOrThrow('JWT_REFRESH_SECRET'),
                expiresIn: this.configService.get('JWT_REFRESH_EXPIRES_IN', '7d'),
            }),
        ]);
        return { access_token: accessToken, refresh_token: refreshToken };
    }
    async createSession(userId, refreshToken) {
        const tokenHash = await bcrypt.hash(refreshToken, 10);
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7);
        await this.prisma.user_sessions.create({
            data: {
                user_id: userId,
                refresh_token_hash: tokenHash,
                expires_at: expiresAt,
            },
        });
    }
    async getUserRoles(userId) {
        const userRoles = await this.prisma.user_roles.findMany({
            where: { user_id: userId },
            include: { roles: true },
        });
        return userRoles.map((ur) => ur.roles.code);
    }
    async verifyOtpInternal(target, code, purpose) {
        const otp = await this.prisma.otp_verifications.findFirst({
            where: {
                target,
                purpose: purpose,
                consumed_at: null,
                expires_at: { gt: new Date() },
            },
            orderBy: { created_at: 'desc' },
        });
        if (!otp) {
            throw new common_1.BadRequestException('OTP no encontrado o expirado');
        }
        const valid = await bcrypt.compare(code, otp.code_hash);
        if (!valid) {
            throw new common_1.BadRequestException('Código OTP incorrecto');
        }
        await this.prisma.otp_verifications.update({
            where: { id: otp.id },
            data: { consumed_at: new Date() },
        });
        return true;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map