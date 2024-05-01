import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Item } from 'src/item/entities/item.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category,
  ) {}

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepository.update(updateCategoryDto, {
      where: { id: +id },
    });
  }

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepository.create(createCategoryDto as any);
  }

  findAll() {
    return this.categoryRepository.findAll({ include: [Item] });
  }

  findOne(id: number) {
    return this.categoryRepository.findOne({ where: { id: +id } });
  }

  remove(id: number) {
    return this.categoryRepository.destroy({ where: { id: +id } });
  }
}
