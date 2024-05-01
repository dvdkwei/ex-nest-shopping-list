import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemCategoryService } from './itemcategory.service';
import { CreateItemCategoryDto } from './dto/create-itemcategory.dto';
import { UpdateItemCategoryDto } from './dto/update-itemcategory.dto';

@Controller('itemcategory')
export class ItemCategoryController {
  constructor(private readonly itemcategoryService: ItemCategoryService) {}

  @Post()
  create(@Body() createItemcategoryDto: CreateItemCategoryDto) {
    return this.itemcategoryService.create(createItemcategoryDto);
  }

  @Get()
  findAll() {
    return this.itemcategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemcategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateItemcategoryDto: UpdateItemCategoryDto,
  ) {
    return this.itemcategoryService.update(+id, updateItemcategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemcategoryService.remove(+id);
  }
}
