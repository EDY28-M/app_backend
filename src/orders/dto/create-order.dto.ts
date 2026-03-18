import { IsUUID, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';

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

  @ApiPropertyOptional({ description: 'Puntos a canjear (100 puntos = S/ 1)' })
  @IsOptional()
  @IsInt()
  @Min(0)
  points_to_redeem?: number;
}
