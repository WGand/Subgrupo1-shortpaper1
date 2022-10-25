import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './Student/student.module';
import { MessageService } from './Message/message.service';
import { MessageController } from './Message/message.controller';
import { TypeLessonService } from './type-lesson/type-lesson.service';
import { TypeLessonController } from './type-lesson/type-lesson.controller';
import { StrategyImageModule } from './strategy-image/strategyImage.module';

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    StrategyImageModule,
  ],
  controllers: [AppController, MessageController, TypeLessonController],
  providers: [AppService, MessageService, TypeLessonService],
})
export class AppModule {}
