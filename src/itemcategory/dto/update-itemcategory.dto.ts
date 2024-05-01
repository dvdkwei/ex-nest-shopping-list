import { PartialType } from '@nestjs/mapped-types';
import { CreateItemCategoryDto } from './create-itemcategory.dto';

export class UpdateItemCategoryDto extends PartialType(CreateItemCategoryDto) {}
