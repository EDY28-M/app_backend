import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiPropertyOptional({ example: 'Casa' })
  @IsOptional()
  @IsString()
  label?: string;

  @ApiPropertyOptional({ example: 'Juan Pérez' })
  @IsOptional()
  @IsString()
  contact_name?: string;

  @ApiPropertyOptional({ example: '+51962345678' })
  @IsOptional()
  @IsString()
  contact_phone?: string;

  @ApiPropertyOptional({ example: 'PE', default: 'PE' })
  @IsOptional()
  @IsString()
  country_code?: string;

  @ApiProperty({ example: 'Huánuco' })
  @IsString()
  @IsNotEmpty()
  region: string;

  @ApiProperty({ example: 'Leoncio Prado' })
  @IsString()
  @IsNotEmpty()
  province: string;

  @ApiProperty({ example: 'Rupa-Rupa' })
  @IsString()
  @IsNotEmpty()
  district: string;

  @ApiProperty({ example: 'Tingo María' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'Jr. Callao 123' })
  @IsString()
  @IsNotEmpty()
  address_line1: string;

  @ApiPropertyOptional({ example: 'Piso 2' })
  @IsOptional()
  @IsString()
  address_line2?: string;

  @ApiPropertyOptional({ example: 'Frente al parque central' })
  @IsOptional()
  @IsString()
  reference?: string;

  @ApiProperty({ example: -9.295 })
  @IsNumber()
  latitude: number;

  @ApiProperty({ example: -75.998 })
  @IsNumber()
  longitude: number;

  @ApiPropertyOptional({ example: false, default: false })
  @IsOptional()
  @IsBoolean()
  is_default?: boolean;
}
