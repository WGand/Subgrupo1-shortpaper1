import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseDto {

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  Category: string[];

  @IsNotEmpty()
  Keywords: string[];
} 