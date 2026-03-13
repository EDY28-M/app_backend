import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { StoresService } from './stores.service';
import { Public } from '../common/decorators';

@ApiTags('Stores')
@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Public()
  @Get('categories')
  @ApiOperation({ summary: 'Listar categorías de negocio' })
  getCategories() {
    return this.storesService.getCategories();
  }

  @Public()
  @Get('popular')
  @ApiOperation({ summary: 'Tiendas populares cerca' })
  findPopular(@Query('category') category?: string) {
    return this.storesService.findPopular(category);
  }

  @Public()
  @Get('catalog')
  @ApiOperation({ summary: 'Obtener catálogo de sucursal' })
  getCatalog(
    @Query('store_id') storeId: string,
    @Query('branch_id') branchId: string,
  ) {
    return this.storesService.getCatalogItems(storeId, branchId);
  }

  @Public()
  @Get('by-slug/:slug')
  @ApiOperation({ summary: 'Obtener tienda por slug' })
  findOne(@Param('slug') slug: string) {
    return this.storesService.findOne(slug);
  }
}
