import { Module } from '@nestjs/common';
import { Course } from './course.entity';
import { CourseService } from './Course.service';
import { CourseController } from './Course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  providers: [CourseService],
  controllers: [CourseController],
})
export class StudentModule {}
