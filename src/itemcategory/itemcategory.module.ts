import { Module } from '@nestjs/common';
import { ItemCategoryService } from './itemcategory.service';
import { ItemCategoryController } from './itemcategory.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ItemCategory } from './entities/itemcategory.entity';

@Module({
  imports: [SequelizeModule.forFeature([ItemCategory])],
  controllers: [ItemCategoryController],
  providers: [ItemCategoryService],
})
export class ItemCategoryModule {}
