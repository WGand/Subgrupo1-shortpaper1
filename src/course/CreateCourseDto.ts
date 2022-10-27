import { IsNotEmpty, IsString } from 'class-validator';
import { Student } from 'src/Student/student.entity';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  category: string[];

  @IsNotEmpty()
  keywords: string[];

}
