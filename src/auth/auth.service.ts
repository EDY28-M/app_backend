import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { OAuth2Client } from 'google-auth-library';
import { Twilio } from 'twilio';
import { PrismaService } from '../prisma/prisma.service';
import {
  RegisterDto,
  LoginDto,
  SendOtpDto,
  VerifyOtpDto,
  GoogleAuthDto,
} from './dto';
import { JwtPayload } from './strategies/jwt.strategy';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly googleClient: OAuth2Client;
  private readonly twilioClient: Twilio | null;
  private readonly twilioPhone: string | null;

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {
    const clientId = this.configService.get<string>('GOOGLE_CLIENT_ID');
    this.googleClient = new OAuth2Client(clientId);

    const accountSid = this.configService.get<string>('TWILIO_ACCOUNT_SID');
    const authToken = this.configService.get<string>('TWILIO_AUTH_TOKEN');
    this.twilioPhone = this.configService.get<string>('TWILIO_PHONE_NUMBER') || null;

    if (accountSid && authToken) {
      this.twilioClient = new Twilio(accountSid, authToken);
      this.logger.log('Twilio configurado correctamente');
    } else {
      this.twilioClient = null;
    }
  }

  async register(dto: RegisterDto) {
    if (dto.phone_e164) {
      const exists = await this.prisma.users.findUnique({
        where: { phone_e164: dto.phone_e164 },
      });
      if (exists) throw new ConflictException('El teléfono ya está registrado');
    }

    if (dto.email) {
      const exists = await this.prisma.users.findUnique({
        where: { email: dto.email },
      });
      if (exists) throw new ConflictException('El email ya está registrado');
    }

    let passwordHash: string | null = null;
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
        auth_provider: dto.auth_provider as any,
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

  async login(dto: LoginDto) {
    let user: any;

    if (dto.phone_e164) {
      user = await this.prisma.users.findUnique({
        where: { phone_e164: dto.phone_e164 },
      });
    } else if (dto.email) {
      user = await this.prisma.users.findUnique({
        where: { email: dto.email },
      });
    }

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    if (user.status !== 'active') {
      throw new UnauthorizedException('Cuenta no activa');
    }

    if (dto.password) {
      if (!user.password_hash) {
        throw new BadRequestException(
          'Esta cuenta no usa contraseña. Intenta con OTP o Google.',
        );
      }
      const valid = await bcrypt.compare(dto.password, user.password_hash);
      if (!valid) throw new UnauthorizedException('Credenciales inválidas');
    } else if (dto.otp_code) {
      await this.verifyOtpInternal(
        dto.phone_e164 || dto.email!,
        dto.otp_code,
        'login',
      );
    } else {
      throw new BadRequestException(
        'Debes proporcionar password o otp_code',
      );
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

  async sendOtp(dto: SendOtpDto) {
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const codeHash = await bcrypt.hash(otpCode, 10);
    const expiryMinutes = this.configService.get<number>(
      'OTP_EXPIRY_MINUTES',
      5,
    );

    let userId: string | null = null;
    const user = await this.prisma.users.findFirst({
      where: {
        OR: [{ phone_e164: dto.target }, { email: dto.target }],
      },
    });
    if (user) userId = user.id;

    await this.prisma.otp_verifications.create({
      data: {
        user_id: userId,
        target: dto.target,
        channel: dto.channel as any,
        purpose: dto.purpose as any,
        code_hash: codeHash,
        expires_at: new Date(Date.now() + expiryMinutes * 60 * 1000),
      },
    });

    const provider = this.configService.get<string>('OTP_PROVIDER', 'local');

    if (provider === 'twilio') {
      if (!this.twilioClient || !this.twilioPhone) {
        throw new BadRequestException(
          'Twilio no configurado. Revisa TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN y TWILIO_PHONE_NUMBER en .env',
        );
      }

      try {
        await this.twilioClient.messages.create({
          body: `Tu codigo de verificacion es: ${otpCode}. Expira en ${expiryMinutes} minutos.`,
          from: this.twilioPhone,
          to: dto.target,
        });
        this.logger.log(`SMS enviado a ${dto.target} via Twilio`);
      } catch (error: any) {
        this.logger.error(`Error enviando SMS via Twilio: ${error?.message}`);
        // Twilio Trial: solo envía a números verificados (códigos 21608, 21614)
        const code = error?.code ?? error?.status;
        if (code === 21608 || code === 21614 || error?.message?.includes('verified')) {
          throw new BadRequestException(
            'Cuenta Twilio Trial: solo puedes enviar SMS a números verificados. ' +
              'Añade el número en https://console.twilio.com o usa OTP_PROVIDER=local para pruebas.',
          );
        }
        throw new BadRequestException(
          'No se pudo enviar el SMS. Verifica el numero de telefono.',
        );
      }
    } else {
      this.logger.warn(`[DEV] OTP para ${dto.target}: ${otpCode}`);
    }

    return {
      message: 'Código OTP enviado',
      expires_in_seconds: expiryMinutes * 60,
      ...(provider === 'local' ? { dev_code: otpCode } : {}),
    };
  }

  async verifyOtp(dto: VerifyOtpDto) {
    const verified = await this.verifyOtpInternal(
      dto.target,
      dto.code,
      dto.purpose,
    );
    return { verified, message: 'OTP verificado correctamente' };
  }

  /**
   * Google Sign-In para Android.
   * Recibe el id_token que Flutter obtiene con google_sign_in
   * y lo verifica con la API de Google server-side.
   * Si el usuario no existe, lo crea automáticamente.
   */
  async googleAuth(dto: GoogleAuthDto) {
    const clientId = this.configService.get<string>('GOOGLE_CLIENT_ID');
    if (!clientId) {
      throw new BadRequestException(
        'Google Sign-In no configurado. Agrega GOOGLE_CLIENT_ID en .env (usa el Web Client ID de Google Cloud Console)',
      );
    }

    let payload: any;
    try {
      const ticket = await this.googleClient.verifyIdToken({
        idToken: dto.id_token,
        audience: clientId,
      });
      payload = ticket.getPayload();
    } catch {
      throw new UnauthorizedException(
        'Token de Google inválido o expirado',
      );
    }

    if (!payload || !payload.sub) {
      throw new UnauthorizedException('No se pudo verificar la identidad de Google');
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
      throw new UnauthorizedException('Cuenta suspendida o eliminada');
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

  async refreshTokens(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.getOrThrow<string>('JWT_REFRESH_SECRET'),
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
        throw new UnauthorizedException('Sesión no válida o expirada');
      }

      const user = await this.prisma.users.findUnique({
        where: { id: payload.sub },
      });
      if (!user || user.status !== 'active') {
        throw new UnauthorizedException('Usuario no válido');
      }

      await this.prisma.user_sessions.update({
        where: { id: session.id },
        data: { revoked_at: new Date() },
      });

      const roles = await this.getUserRoles(user.id);
      const tokens = await this.generateTokens(user.id, roles);
      await this.createSession(user.id, tokens.refresh_token);

      return tokens;
    } catch {
      throw new UnauthorizedException('Refresh token inválido o expirado');
    }
  }

  async logout(userId: string) {
    await this.prisma.user_sessions.updateMany({
      where: { user_id: userId, revoked_at: null },
      data: { revoked_at: new Date() },
    });
    return { message: 'Sesión cerrada correctamente' };
  }

  private async generateTokens(
    userId: string,
    roles: string[],
  ): Promise<{ access_token: string; refresh_token: string }> {
    const payload: JwtPayload = { sub: userId, roles };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload as any, {
        secret: this.configService.getOrThrow<string>('JWT_SECRET'),
        expiresIn: this.configService.get('JWT_EXPIRES_IN', '15m') as any,
      }),
      this.jwtService.signAsync(payload as any, {
        secret: this.configService.getOrThrow<string>('JWT_REFRESH_SECRET'),
        expiresIn: this.configService.get('JWT_REFRESH_EXPIRES_IN', '7d') as any,
      }),
    ]);

    return { access_token: accessToken, refresh_token: refreshToken };
  }

  private async createSession(userId: string, refreshToken: string) {
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

  private async getUserRoles(userId: string): Promise<string[]> {
    const userRoles = await this.prisma.user_roles.findMany({
      where: { user_id: userId },
      include: { roles: true },
    });
    return userRoles.map((ur) => ur.roles.code);
  }

  private async verifyOtpInternal(
    target: string,
    code: string,
    purpose: string,
  ): Promise<boolean> {
    const otp = await this.prisma.otp_verifications.findFirst({
      where: {
        target,
        purpose: purpose as any,
        consumed_at: null,
        expires_at: { gt: new Date() },
      },
      orderBy: { created_at: 'desc' },
    });

    if (!otp) {
      throw new BadRequestException('OTP no encontrado o expirado');
    }

    const valid = await bcrypt.compare(code, otp.code_hash);
    if (!valid) {
      throw new BadRequestException('Código OTP incorrecto');
    }

    await this.prisma.otp_verifications.update({
      where: { id: otp.id },
      data: { consumed_at: new Date() },
    });

    return true;
  }
}
