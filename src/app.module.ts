import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './Student/student.module';
import { MessageService } from './Message/message.service';
import { MessageController } from './Message/message.controller';
import { StrategyTextService } from './strategyText/strategyText.service';
import { StrategyTextController } from './strategyText/strategyText.controller';
import { StrategyImageModule } from './strategyText/strategyText.module';

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    StrategyImageModule,
  ],
  controllers: [AppController, MessageController, StrategyTextController],
  providers: [AppService, MessageService, StrategyTextService],
})
export class AppModule {}
