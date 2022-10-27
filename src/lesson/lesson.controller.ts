import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { CreateLessonDto } from './CreateLesson.dto';
import { Lesson } from './Lesson.entity';
import { LessonService } from './lesson.service';

@Controller('Lesson')
export class LessonController {
  constructor(private LessonService: LessonService) {}

  // @Get()
  // findAll(): Lesson[] {
  // return this.LessonService.findAll();
  // }

  @Get(':LessonId')
  findLesson(@Param('LessonId') LessonId: string): Promise<Lesson> {
    return this.LessonService.findLesson(LessonId);
  }

  @Post()
  createLesson(@Body() newLesson: CreateLessonDto): Promise<Lesson> {
    return this.LessonService.createLesson(newLesson);
  }

  @Delete(':LessonId')
  deleteLesson(@Param('LessonId') LessonId: string): Promise<Lesson> {
    return this.LessonService.deleteLesson(LessonId);
  }

  @Put(':LessonId')
  updateLesson(
    @Param('LessonId') LessonId: string,
    @Body() updateLesson: CreateLessonDto,
  ): Promise<Lesson> {
    return this.LessonService.updateLesson(LessonId, updateLesson);
  }
}
