import { Test, TestingModule } from '@nestjs/testing';
import { ItemCategoryController } from './itemcategory.controller';
import { ItemCategoryService } from './itemcategory.service';

describe('ItemcategoryController', () => {
  let controller: ItemCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemCategoryController],
      providers: [ItemCategoryService],
    }).compile();

    controller = module.get<ItemCategoryController>(ItemCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
