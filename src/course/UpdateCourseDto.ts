import { IsOptional, IsString } from 'class-validator';
import { Student } from 'src/Student/student.entity';

export class UpdateCourseDto {

    
  @IsOptional()  
  title: string;

  @IsOptional()  
  category: string[];

  @IsOptional()   
  keywords: string[];
}
