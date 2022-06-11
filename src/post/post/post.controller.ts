import { UpdatePostDto } from './../dto/update_post.dto';
import { PostService } from './../post.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePost } from '../dto/create_post.dto';
import { QueryPost } from '../dto/query_post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly service: PostService) {}
  @Post()
  async createPost(@Body() createUserDto: CreatePost) {
    return this.service.createPost(createUserDto);
  }

  @Get(':id')
  async getPost(@Param('id', ParseIntPipe) id: number) {
    return this.service.getPost(id);
  }

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async getPosts(@Query() queryPost: QueryPost) {
    return this.service.getPosst(queryPost);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.service.updatePost(id, updatePostDto);
  }

  @Delete(':id')
  async deletePost(@Param('id', ParseIntPipe) id: number) {
    return this.service.deletePost(id);
  }
}
