import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '214352',
      name: 'Item one',
      qty: 100,
      description: 'This is item one',
    },
    {
      id: '64432215',
      name: 'Item two',
      qty: 100,
      description: 'This is item two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
