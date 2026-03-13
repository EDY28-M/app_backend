import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AddressesService } from './addresses.service';
import { CreateAddressDto, UpdateAddressDto } from './dto';
import { CurrentUser } from '../common/decorators';

@ApiTags('Addresses')
@ApiBearerAuth()
@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear nueva dirección' })
  create(
    @CurrentUser('id') userId: string,
    @Body() dto: CreateAddressDto,
  ) {
    return this.addressesService.create(userId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar direcciones del usuario' })
  findAll(@CurrentUser('id') userId: string) {
    return this.addressesService.findAllByUser(userId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar dirección' })
  update(
    @CurrentUser('id') userId: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateAddressDto,
  ) {
    return this.addressesService.update(userId, id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar dirección' })
  remove(
    @CurrentUser('id') userId: string,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.addressesService.remove(userId, id);
  }

  @Patch(':id/default')
  @ApiOperation({ summary: 'Marcar dirección como predeterminada' })
  setDefault(
    @CurrentUser('id') userId: string,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.addressesService.setDefault(userId, id);
  }
}
