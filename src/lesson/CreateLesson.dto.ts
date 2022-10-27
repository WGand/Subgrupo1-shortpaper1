import { IsOptional,IsNotEmpty, IsString } from 'class-validator';
import { Course } from 'src/course/course.entity';
import { strategyText } from 'src/strategyText/strategyText.entity';
import { strategyVideo } from 'src/strategyVideo/strategyVideo.entity';
import { Student } from 'src/Student/student.entity';
import { StrategyEnum } from './StrategyEnum';

export class CreateLessonDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  Category: string[];

  @IsNotEmpty()
  Keywords: string[];
  
  @IsOptional()
  Strategy: StrategyEnum;

  @IsOptional()
  Course: Course

  @IsOptional()
  Texto : strategyText
 
  @IsOptional()
  Video : strategyVideo

}