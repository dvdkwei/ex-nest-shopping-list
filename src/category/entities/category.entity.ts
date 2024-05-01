import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { Item } from 'src/item/entities/item.entity';
import { ItemCategory } from 'src/itemcategory/entities/itemcategory.entity';

@Table({ tableName: 'category' })
export class Category extends Model {
  @Column
  name: string;

  @BelongsToMany(() => Item, () => ItemCategory)
  items: Item[];
}
