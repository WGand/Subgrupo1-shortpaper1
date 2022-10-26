import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './Student/student.module';
import { CourseModule } from './course/Course.module';
import { LessonService } from './lesson/lesson.service';
import { LessonController } from './lesson/lesson.controller';

@Module({
  imports: [StudentModule, TypeOrmModule.forRoot(typeOrmConfig), CourseModule],
  controllers: [AppController, LessonController],
  providers: [AppService, LessonService],
})
export class AppModule {}
