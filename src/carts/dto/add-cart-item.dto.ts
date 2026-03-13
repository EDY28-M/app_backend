import { IsUUID, IsInt, Min, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class AddCartItemDto {
  @ApiProperty()
  @IsUUID()
  store_id: string;

  @ApiProperty()
  @IsUUID()
  branch_id: string;

  @ApiProperty()
  @IsUUID()
  catalog_item_id: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  variant_id?: string;

  @ApiProperty()
  @IsUUID()
  branch_catalog_item_id: string;

  @ApiProperty({ default: 1 })
  @IsInt()
  @Min(1)
  qty: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}
