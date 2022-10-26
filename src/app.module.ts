import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './Student/student.module';
import { MessageService } from './Message/message.service';
import { MessageController } from './Message/message.controller';
import { MailDecoratorService } from './MailDecorator/MailDecorator.service';
import { MailDecoratorController } from './MailDecorator/MailDecorator.controller';
import { LogDecoratorService } from './LogDecorator/LogDecorator.service';
import { LogDecoratorController } from './LogDecorator/LogDecorator.controller';

@Module({
  imports: [StudentModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController, MessageController, MailDecoratorController, LogDecoratorController],
  providers: [AppService, MessageService, MailDecoratorService, LogDecoratorService],
})
export class AppModule {}
