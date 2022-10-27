import { Module } from '@nestjs/common';
import { Lesson } from './Lesson.entity';
import { LessonService } from './Lesson.service';
import { LessonController } from './Lesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StrategyEnum } from './StrategyEnum';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson])],
  providers: [LessonService],
  controllers: [LessonController],
})
export class LessonModule {}
