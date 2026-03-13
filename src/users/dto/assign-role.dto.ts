import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum RoleScopeDto {
  PLATFORM = 'platform',
  MERCHANT = 'merchant',
  STORE_BRANCH = 'store_branch',
}

export class AssignRoleDto {
  @ApiProperty({ example: 'customer', description: 'Código del rol' })
  @IsString()
  @IsNotEmpty()
  role_code: string;

  @ApiProperty({ enum: RoleScopeDto, example: 'platform' })
  @IsEnum(RoleScopeDto)
  scope_type: RoleScopeDto;

  @ApiPropertyOptional({ description: 'ID del merchant o branch (si aplica)' })
  @IsOptional()
  @IsUUID()
  scope_id?: string;
}
