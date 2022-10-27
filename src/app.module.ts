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
import { StrategyTextModule } from './strategyText/strategyText.module';
import { StrategyVideoService } from './strategy-video/strategyVideo.service';
import { StrategyVideoController } from './strategy-video/strategyVideo.controller';
import { StrategyVideoModule } from './strategy-video/strategyVideo.module';

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    StrategyTextModule,
    StrategyVideoModule,
  ],
  controllers: [AppController, MessageController],
  providers: [AppService, MessageService],
})
export class AppModule {}
