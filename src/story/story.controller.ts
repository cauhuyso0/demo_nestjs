import { QueryStoryDto } from './dto/query.dto';
import { StoryService } from './story.service';
import {
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller('story')
export class StoryController {
  constructor(private readonly service: StoryService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The article has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createPosts(@Query('page', ParseIntPipe) page) {
    return this.service.createStory(page);
  }

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async getStory(@Query() queryStoryDto: QueryStoryDto) {
    return this.service.getStories(queryStoryDto);
  }
}
