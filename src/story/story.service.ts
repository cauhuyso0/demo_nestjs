import { QueryStoryDto } from './dto/query.dto';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from 'src/prisma_service/prisma.service';

@Injectable()
export class StoryService {
  constructor(private readonly prisma: PrismaService) {}

  async createStory(page) {
    try {
      return axios
        .get(`https://api.jikan.moe/v3/search/anime?q=Ghibli&page=${page}`)
        .then((val) => {
          for (let i = 0; i < val.data.results.length; i++) {
            if (val.data.results[i].end_date == null) {
              val.data.results[i].end_date = new Date();
            }
            if (val.data.results[i].rated == null) {
              val.data.results[i].rated = '';
            }
            if (val.data.results[i].start_date == null) {
              val.data.results[i].start_date = new Date();
            }
          }
          const result = this.prisma.story.createMany({
            data: val.data.results,
            skipDuplicates: true,
          });
          return result;
        });
    } catch (error) {
      throw error;
    }
  }

  async getStories(queryStoryDto: QueryStoryDto) {
    try {
      const count = await this.prisma.story.count({
        where: {
          title: {
            contains: queryStoryDto.filter,
          },
        },
      });
      const result = await this.prisma.story.findMany({
        where: {
          title: {
            contains: queryStoryDto.filter,
          },
        },
        skip: (queryStoryDto.offset - 1) * queryStoryDto.limit,
        take: queryStoryDto.limit,
        orderBy: { start_date: queryStoryDto.sort },
      });

      return {
        page: queryStoryDto.offset,
        pageCount: Math.floor(count / queryStoryDto.limit) + 1,
        totalCount: count,
        records: result,
      };
    } catch (error) {
      throw error;
    }
  }
}
