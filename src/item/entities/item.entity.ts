import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { Category } from 'src/category/entities/category.entity';
import { ItemCategory } from 'src/itemcategory/entities/itemcategory.entity';

enum ItemStatus {
  NOT_DONE = 0,
  DONE = 1,
}

@Table({ tableName: 'item' })
export class Item extends Model {
  @Column
  name: string;

  @Column
  amount: number;

  @Column
  status: ItemStatus;

  @BelongsToMany(() => Category, () => ItemCategory)
  categories: Category[];
}
