import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './Student/student.module';
import { CourseModule } from './course/Course.module';
import { AuthModule } from './auth/auth.module';
import { LessonModule } from './lesson/Lesson.module';

@Module({
  imports: [
    StudentModule,
    LessonModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    CourseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
