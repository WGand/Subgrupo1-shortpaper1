import { Module } from '@nestjs/common';
import { Lesson } from './Lesson.entity';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StrategyEnum } from './StrategyEnum';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson])],
  providers: [LessonService],
  controllers: [LessonController],
})
export class LessonModule {}
