import { IsEmail, IsOptional, IsString, Matches, MinLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class LoginDto {
  @ApiPropertyOptional({ example: '+51962345678' })
  @IsOptional()
  @Matches(/^\+[1-9]\d{6,14}$/, {
    message: 'phone_e164 debe estar en formato E.164',
  })
  phone_e164?: string;

  @ApiPropertyOptional({ example: 'juan@correo.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: 'MiPassword123' })
  @IsOptional()
  @MinLength(6)
  password?: string;

  @ApiPropertyOptional({ description: 'Código OTP de 6 dígitos' })
  @IsOptional()
  @IsString()
  otp_code?: string;
}
