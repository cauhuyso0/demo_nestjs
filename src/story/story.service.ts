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

      //   return this.prisma.story.create({
      //     data: {
      //       mal_id: 34979,
      //       url: 'https://myanimelist.net/anime/34979/Shounen_Ashibe__Go_Go_Goma-chan_2',
      //       image_url:
      //         'https://cdn.myanimelist.net/images/anime/6/89580.jpg?s=ad3710c6b5055a322bdbe865017bc7a5',
      //       title: 'Shounen Ashibe: Go! Go! Goma-chan 2',
      //       airing: false,
      //       synopsis: 'Second season of Shounen Ashibe: Go! Go! Goma-chan.',
      //       type: 'TV',
      //       episodes: 32,
      //       score: 5.97,
      //       start_date: '2017-04-04T00:00:00+00:00',
      //       end_date: '2018-02-13T00:00:00+00:00',
      //       members: 987,
      //       rated: 'G',
      //     },
      //   });
      //   });
      //   return myPromise.then((val) => {
      //     return val;
      //   });
    } catch (error) {
      throw error;
    }
  }
}
