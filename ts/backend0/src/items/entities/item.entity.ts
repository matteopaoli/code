import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('items')
class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  qty: number;
}

export default Item;
