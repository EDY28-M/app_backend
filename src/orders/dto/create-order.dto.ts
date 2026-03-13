import { IsUUID, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  @IsUUID()
  cart_id: string;

  @ApiProperty()
  @IsUUID()
  delivery_address_id: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}
