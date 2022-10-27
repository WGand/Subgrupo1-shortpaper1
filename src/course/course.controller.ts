import {
  Body,
  Controller,
  Delete,
  Get,
  Request,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateCourseDto } from './CreateCourseDto';
import { Course } from './course.entity';
import { CourseService } from './course.service';
import { UpdateCourseDto } from './UpdateCourseDto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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
  DeleteCourse(@Param('CourseId') CourseId: string): Promise<Course> {
    return this.CourseService.DeleteCourse(CourseId);
  }

  @Put(':CourseId')
  updateCourse(
    @Param('CourseId') CourseId: string,
    @Body() updateCourse: UpdateCourseDto,
  ): Promise<Course> {
    return this.CourseService.updateCourse(CourseId, updateCourse);
  }

  @Put('publish/:CourseId')
  PublishCourse(@Param('CourseId') CourseId: string): Promise<Course> {
    return this.CourseService.PublishCourse(CourseId);
  }

  @Put('Suspend/:CourseId')
  SuspendCourse(@Param('CourseId') CourseId: string): Promise<Course> {
    return this.CourseService.SuspendCourse(CourseId);
  }

  @UseGuards(JwtAuthGuard)
  @Put('inscribirCurso/:CourseId')
  suscriptionToCourse(
    @Request() req,
    @Param('CourseId') CourseId: string,
  ): Promise<Course> {
    return this.CourseService.suscriptionToCourse(req.user.email, CourseId);
  }
}
