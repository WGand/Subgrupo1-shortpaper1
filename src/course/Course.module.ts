import { Module } from '@nestjs/common';
import { Course } from './course.entity';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailDecoratorService } from 'src/MailDecorator/MailDecorator.service';
import { StudentModule } from 'src/Student/student.module';

@Module({
  imports: [TypeOrmModule.forFeature([Course]), StudentModule],
  providers: [CourseService, MailDecoratorService],
  controllers: [CourseController],
})
export class CourseModule {}
