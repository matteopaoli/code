import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item: ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}\nDescription: ${createItemDto.description}\nQuantity: ${createItemDto.qty}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Deleted: ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update ${id} - Name: ${updateItemDto.name}`;
  }
}
