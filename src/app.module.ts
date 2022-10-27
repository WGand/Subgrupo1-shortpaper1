import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './Student/student.module';
import { MessageService } from './Message/message.service';
import { MessageController } from './Message/message.controller';
import { StrategyTextModule } from './strategyText/strategyText.module';
import { CourseModule } from './course/Course.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    CourseModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
