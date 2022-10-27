import { IsOptional} from 'class-validator';
import { Course } from 'src/course/course.entity';
import { strategyText } from 'src/strategyText/strategyText.entity';
import { strategyVideo } from 'src/strategyVideo/strategyVideo.entity';
import { StrategyEnum } from './StrategyEnum';

export class UpdateLessonDto {
  @IsOptional()
  title: string;

  @IsOptional()
  Category: string[];

  @IsOptional()
  keywords: string[];
  
  @IsOptional()
  Strategy: StrategyEnum;

  @IsOptional()
  Course: Course

  @IsOptional()
  Texto : strategyText
 
  @IsOptional()
  Video : strategyVideo

}