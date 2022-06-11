import { PrismaService } from '../../prisma_service/prisma.service';
import { Module } from '@nestjs/common';
import { PostService } from '../post.service';
import { PostController } from './post.controller';

@Module({
  controllers: [PostController],
  providers: [PostService, PrismaService],
})
export class PostModule {}
