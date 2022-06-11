import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsOptional,
  IsString,
  IsInt,
  IsDate,
} from 'class-validator';

export class ScreateStoryDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  mal_id: number;

  @IsOptional()
  @IsString()
  url: string;

  @IsOptional()
  @IsString()
  image_url: string;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsBoolean()
  airing: boolean;

  @IsOptional()
  @IsString()
  synopsis: string;

  @IsOptional()
  @IsString()
  type: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  episodes: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  score: number;

  @IsOptional()
  @IsDate()
  start_date: Date;

  @IsOptional()
  @IsDate()
  end_date: Date;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  members: number;

  @IsOptional()
  @IsString()
  rated: string;
}
