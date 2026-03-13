import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum AuthProviderDto {
  PHONE = 'phone',
  EMAIL = 'email',
  GOOGLE = 'google',
}

export class RegisterDto {
  @ApiProperty({ example: 'Juan' })
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @ApiPropertyOptional({ example: 'Pérez' })
  @IsString()
  @IsOptional()
  last_name?: string;

  @ApiProperty({ enum: AuthProviderDto, example: 'phone' })
  @IsEnum(AuthProviderDto)
  auth_provider: AuthProviderDto;

  @ApiPropertyOptional({ example: '+51962345678' })
  @IsOptional()
  @Matches(/^\+[1-9]\d{6,14}$/, {
    message: 'phone_e164 debe estar en formato E.164 (ej: +51962345678)',
  })
  phone_e164?: string;

  @ApiPropertyOptional({ example: 'juan@correo.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: 'MiPassword123', minLength: 6 })
  @IsOptional()
  @MinLength(6)
  password?: string;

  @ApiPropertyOptional({ description: 'Google ID token' })
  @IsOptional()
  @IsString()
  google_token?: string;
}
