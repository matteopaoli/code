import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Item from './entities/item.entity';
import ItemEntity from './entities/item.entity';
@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemEntity)
    private itemsRepository: Repository<ItemEntity>,
  ) {}

  async findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  findOne(id: number): Promise<Item> {
    return this.itemsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.itemsRepository.delete(id);
  }
}
