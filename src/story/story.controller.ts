import { StoryService } from './story.service';
import { Controller, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller('story')
export class StoryController {
  constructor(private readonly service: StoryService) {}

  @Put()
  @ApiResponse({
    status: 201,
    description: 'The article has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createPosts(@Query('page', ParseIntPipe) page) {
    return this.service.createStory(page);
  }
}
