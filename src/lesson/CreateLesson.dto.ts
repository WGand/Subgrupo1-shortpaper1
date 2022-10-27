import { IsNotEmpty, IsString } from 'class-validator';
import { strategyText } from 'src/strategyText/strategyText.entity';
import { strategyVideo } from 'src/strategyVideo/strategyVideo.entity';
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

  Texto : strategyText
  
  Video : strategyVideo

}