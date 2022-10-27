import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './Student/student.module';
import { MessageService } from './Message/message.service';
import { MessageController } from './Message/message.controller';

@Module({
  imports: [
    
    StudentModule,
    LessonModule,
   
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    CourseModule,
  ,
    StrategyTextModule,
    StrategyVideoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
