import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { VuesModule } from './vues/vues.module';
import { CategoriesModule } from './categories/categories.module';
import { CommentairesModule } from './commentaires/commentaires.module';
import { LikesModule } from './likes/likes.module';
import { PayementsModule } from './payements/payements.module';
import { TypesModule } from './types/types.module';
import { AbonnementsModule } from './abonnements/abonnements.module';
import { ContentsModule } from './contents/contents.module';
import { ClientsModule } from './clients/clients.module';
import { BlogsModule } from './blogs/blogs.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CategoriesModule } from './categories/categories.module';




@Module({
  imports: [UsersModule, PrismaModule, ProductsModule, AuthModule, OrdersModule, VuesModule, CategoriesModule, CommentairesModule, LikesModule, PayementsModule, TypesModule, AbonnementsModule, ContentsModule, ClientsModule, BlogsModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
