import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CartsService } from './carts.service';
import { AddCartItemDto, UpdateCartItemDto } from './dto';
import { CurrentUser } from '../common/decorators';

@ApiTags('Carts')
@ApiBearerAuth()
@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener carritos activos del usuario' })
  getMyCarts(@CurrentUser('id') userId: string) {
    return this.cartsService.getMyCarts(userId);
  }

  @Get('current')
  @ApiOperation({ summary: 'Obtener o crear carrito para store/branch' })
  getOrCreate(
    @CurrentUser('id') userId: string,
    @Query('store_id') storeId: string,
    @Query('branch_id') branchId: string,
  ) {
    return this.cartsService.getOrCreateCart(userId, storeId, branchId);
  }

  @Post('items')
  @ApiOperation({ summary: 'Agregar item al carrito' })
  addItem(
    @CurrentUser('id') userId: string,
    @Body() dto: AddCartItemDto,
  ) {
    return this.cartsService.addItem(userId, dto);
  }

  @Patch('items/:id')
  @ApiOperation({ summary: 'Actualizar cantidad o notas de item' })
  updateItem(
    @CurrentUser('id') userId: string,
    @Param('id') itemId: string,
    @Body() dto: UpdateCartItemDto,
  ) {
    return this.cartsService.updateItem(userId, itemId, dto);
  }

  @Delete('items/:id')
  @ApiOperation({ summary: 'Eliminar item del carrito' })
  removeItem(
    @CurrentUser('id') userId: string,
    @Param('id') itemId: string,
  ) {
    return this.cartsService.removeItem(userId, itemId);
  }
}
