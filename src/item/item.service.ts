import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Item } from './entities/item.entity';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class ItemService {
  constructor(@InjectModel(Item) private itemRepository: typeof Item) {}

  async create(createItemDto: CreateItemDto) {
    return this.itemRepository.create(createItemDto as any);
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return this.itemRepository.update(updateItemDto, { where: { id: +id } });
  }

  findAll() {
    return this.itemRepository.findAll({ include: [Category] });
  }

  findOne(id: number) {
    return this.itemRepository.findOne({ where: { id: +id } });
  }

  remove(id: number) {
    return this.itemRepository.destroy({ where: { id: +id } });
  }
}
