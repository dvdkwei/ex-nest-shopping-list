import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ItemModule } from './item/item.module';
import { CategoryModule } from './category/category.module';
import { ItemCategoryModule } from './itemcategory/itemcategory.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: '.db/data.sqlite3',
      autoLoadModels: true,
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    ItemModule,
    CategoryModule,
    ItemCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
