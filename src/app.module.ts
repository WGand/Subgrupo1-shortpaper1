import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './Student/student.module';
import { MessageService } from './Message/message.service';
import { MessageController } from './Message/message.controller';
import { CourseModule } from './course/Course.module';
import { CourseService } from './course/course.service';
import { CourseController } from './course/course.controller';

@Module({
  imports: [StudentModule, TypeOrmModule.forRoot(typeOrmConfig), CourseModule],
  controllers: [AppController, MessageController, CourseController],
  providers: [AppService, MessageService, CourseService],
})
export class AppModule {}
