import { IsNotEmpty, IsString } from 'class-validator';
import { Student } from 'src/Student/student.entity';
import { CourseStateEnum } from './CourseStateEnum';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  category: string[];

  @IsNotEmpty()
  keywords: string[];

  State: CourseStateEnum;

}
