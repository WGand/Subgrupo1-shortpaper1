import { IsNotEmpty, IsString } from 'class-validator';
import { Student } from 'src/Student/student.entity';
import { StrategyEnum } from './StrategyEnum';

export class CreateLessonDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  category: string[];

  @IsNotEmpty()
  keywords: string[];

  Strategy: StrategyEnum;

}