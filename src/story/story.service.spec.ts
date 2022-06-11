import { Test, TestingModule } from '@nestjs/testing';
import { StoryService } from './story.service';

describe('StoryService', () => {
  let provider: StoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoryService],
    }).compile();

    provider = module.get<StoryService>(StoryService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
