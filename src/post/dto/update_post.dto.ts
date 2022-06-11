import { Type } from 'class-transformer';
import { IsBoolean, IsOptional, IsString, IsInt } from 'class-validator';

export class UpdatePostDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  published: boolean;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  authorId: number;
}
