import { Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FavoritesService } from './favorites.service';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@ApiTags('Favorites')
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  @ApiOperation({ summary: 'Listar favoritos del usuario' })
  list(@CurrentUser('id') userId: string) {
    return this.favoritesService.list(userId);
  }

  @Get('ids')
  @ApiOperation({ summary: 'IDs de tiendas favoritas' })
  getIds(@CurrentUser('id') userId: string) {
    return this.favoritesService.getFavoriteStoreIds(userId);
  }

  @Post(':storeId')
  @ApiOperation({ summary: 'Agregar tienda a favoritos' })
  add(@CurrentUser('id') userId: string, @Param('storeId') storeId: string) {
    return this.favoritesService.add(userId, storeId);
  }

  @Delete(':storeId')
  @ApiOperation({ summary: 'Quitar tienda de favoritos' })
  remove(@CurrentUser('id') userId: string, @Param('storeId') storeId: string) {
    return this.favoritesService.remove(userId, storeId);
  }
}
