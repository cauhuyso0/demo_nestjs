import { PrismaService } from './../prisma_service/prisma.service';
import { Module } from '@nestjs/common';
import { StoryController } from './story.controller';
import { StoryService } from './story.service';

@Module({
  controllers: [StoryController],
  providers: [StoryService, PrismaService],
})
export class StoryModule {}
