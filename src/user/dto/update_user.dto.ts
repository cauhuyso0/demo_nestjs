import { IsOptional, IsString } from 'class-validator';

export class UpdateUser {
  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  name: string;
}
