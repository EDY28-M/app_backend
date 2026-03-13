import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto';
import { CurrentUser } from '../common/decorators';

@ApiTags('Orders')
@ApiBearerAuth()
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Crear pedido desde carrito' })
  create(
    @CurrentUser('id') userId: string,
    @Body() dto: CreateOrderDto,
  ) {
    return this.ordersService.create(userId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar mis pedidos' })
  findMyOrders(
    @CurrentUser('id') userId: string,
    @Query('tab') tab?: 'active' | 'history',
  ) {
    return this.ordersService.findMyOrders(userId, tab ?? 'active');
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener detalle de pedido' })
  findOne(
    @CurrentUser('id') userId: string,
    @Param('id') orderId: string,
  ) {
    return this.ordersService.findOne(userId, orderId);
  }
}
