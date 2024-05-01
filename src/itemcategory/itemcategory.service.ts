import { Injectable } from '@nestjs/common';
import { CreateItemCategoryDto } from './dto/create-itemcategory.dto';
import { UpdateItemCategoryDto } from './dto/update-itemcategory.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ItemCategory } from './entities/itemcategory.entity';

@Injectable()
export class ItemCategoryService {
  constructor(
    @InjectModel(ItemCategory)
    private itemCategoryRepository: typeof ItemCategory,
  ) {}

  update(id: number, updateCategoryDto: UpdateItemCategoryDto) {
    return this.itemCategoryRepository.update(updateCategoryDto, {
      where: { id: +id },
    });
  }

  create(createCategoryDto: CreateItemCategoryDto) {
    return this.itemCategoryRepository.create(createCategoryDto as any);
  }

  findAll() {
    return this.itemCategoryRepository.findAll();
  }

  findOne(id: number) {
    return this.itemCategoryRepository.findOne({ where: { id: +id } });
  }

  remove(id: number) {
    return this.itemCategoryRepository.destroy({ where: { id: +id } });
  }
}
