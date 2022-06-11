import { UpdatePostDto } from './dto/update_post.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma_service/prisma.service';
import { Injectable } from '@nestjs/common';
import { QueryPost } from './dto/query_post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async createPost(data) {
    return this.prisma.post.create({ data });
  }

  async getPost(id) {
    return this.prisma.post.findUnique({
      where: { id: id },
    });
  }

  async getPosst(queryPost: QueryPost) {
    const { limit, offset } = queryPost;
    return this.prisma.post.findMany({
      take: limit,
      skip: offset,
    });
  }

  async updatePost(id, updatePostDto: UpdatePostDto) {
    try {
      const result = await this.prisma.post.update({
        where: { id: id },
        data: {
          title: updatePostDto.title,
          content: updatePostDto.content,
          published: updatePostDto.published,
          authorId: updatePostDto.authorId,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  async deletePost(id) {
    try {
      const result = await this.prisma.post.delete({
        where: { id: id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
