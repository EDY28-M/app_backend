import { IsEnum, IsNotEmpty, IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum OtpPurposeDto {
  REGISTER = 'register',
  LOGIN = 'login',
  VERIFY_PHONE = 'verify_phone',
  RESET_PASSWORD = 'reset_password',
}

export enum OtpChannelDto {
  SMS = 'sms',
  WHATSAPP = 'whatsapp',
  EMAIL = 'email',
}

export class SendOtpDto {
  @ApiProperty({ example: '+51962345678', description: 'Teléfono o email destino' })
  @IsString()
  @IsNotEmpty()
  target: string;

  @ApiProperty({ enum: OtpChannelDto, example: 'sms' })
  @IsEnum(OtpChannelDto)
  channel: OtpChannelDto;

  @ApiProperty({ enum: OtpPurposeDto, example: 'login' })
  @IsEnum(OtpPurposeDto)
  purpose: OtpPurposeDto;
}

export class VerifyOtpDto {
  @ApiProperty({ example: '+51962345678' })
  @IsString()
  @IsNotEmpty()
  target: string;

  @ApiProperty({ example: '123456' })
  @Matches(/^\d{6}$/, { message: 'El código OTP debe ser de 6 dígitos' })
  code: string;

  @ApiProperty({ enum: OtpPurposeDto, example: 'login' })
  @IsEnum(OtpPurposeDto)
  purpose: OtpPurposeDto;
}
