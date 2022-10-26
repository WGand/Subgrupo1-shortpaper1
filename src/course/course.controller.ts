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
import { Course } from './Course.entity';
import { CourseService } from './Course.service';
import { StudentService } from 'src/Student/student.service';

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
    @Body() updateCourse: CreateCourseDto,
  ): Promise<Course> {
    return this.CourseService.updateCourse(CourseId, updateCourse);
  }

  @Options(':CourseId')
  PublishCourse(@Param('CourseId') CourseId: string): Promise<Course> {
    return this.CourseService.PublishCourse(CourseId);
  }

}
