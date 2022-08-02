import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { ItemDto } from './dto/item.dto';
import { ItemsService } from './items.service';
import Item from './entities/item.entity';
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: ItemDto): string {
    return `Name: ${createItemDto.name}\nDescription: ${createItemDto.description}\nQuantity: ${createItemDto.qty}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Deleted: ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: ItemDto, @Param('id') id): string {
    return `Update ${id} - Name: ${updateItemDto.name}`;
  }
}
