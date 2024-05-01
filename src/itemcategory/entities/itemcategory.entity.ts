import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Category } from 'src/category/entities/category.entity';
import { Item } from 'src/item/entities/item.entity';

@Table({ tableName: 'item_category' })
export class ItemCategory extends Model {
  @ForeignKey(() => Item)
  @Column
  itemId: number;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;
}
