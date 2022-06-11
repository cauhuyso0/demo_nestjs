import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class QueryStoryDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  limit = 10;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  offset = 1;

  @IsString()
  filter = '';

  sort: any;
}
