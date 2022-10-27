import {
  Body,
  Controller,
  Delete,
  Get,
  Options,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCourseDto } from './CreateCourseDto';
import { Course } from './course.entity';
import { CourseService } from './course.service';
import { UpdateCourseDto } from './UpdateCourseDto';

@Controller('Course')
export class CourseController {
  constructor(private CourseService: CourseService) {}

  @Get(':CourseId')
  findCourse(@Param('CourseId') CourseId: string): Promise<Course> {
    return this.CourseService.findCourse(CourseId);
  }

  @Post()
  createCourse(@Body() newCourse: CreateCourseDto): Promise<Course> {
    return this.CourseService.createCourse(newCourse);
  }

  @Delete(':CourseId')
  deleteCourse(@Param('CourseId') CourseId: string): Promise<Course> {
    return this.CourseService.deleteCourse(CourseId);
  }

  @Put(':CourseId')
  updateCourse(
    @Param('CourseId') CourseId: string,
    @Body() updateCourse: UpdateCourseDto,
  ): Promise<Course> {
    console.log(updateCourse)
    return this.CourseService.updateCourse(CourseId, updateCourse);
  }

  @Options(':CourseId')
  PublishCourse(@Param('CourseId') CourseId: string): Promise<Course> {
    return this.CourseService.PublishCourse(CourseId);
  }
}
