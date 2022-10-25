import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCourseDto } from './CreateCourseDto';
import { Course } from './course.entity';
import { CourseService } from './course.service';

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
  updateStudent(
    @Param('CourseId') CourseId: string,
    @Body() updateCourse: CreateCourseDto,
  ): Promise<Course> {
    return this.CourseService.updateStudent(CourseId, updateCourse);
  }
}
