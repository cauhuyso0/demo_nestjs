import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class QueryPost {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  limit?: number = 10;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  offset?: number = 0;
}
