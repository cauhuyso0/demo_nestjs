import { StoryService } from './story/story.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma_service/prisma.service';
import { StoryModule } from './story/story.module';

@Module({
  imports: [StoryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, StoryService],
})
export class AppModule {}
