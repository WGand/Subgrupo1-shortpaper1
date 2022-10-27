import { Module } from '@nestjs/common';
import { strategyVideo } from './strategyVideo.entity';
import { StrategyVideoService } from './strategyVideo.service';
import { StrategyVideoController } from './strategyVideo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([strategyVideo])],
  providers: [StrategyVideoService],
  controllers: [StrategyVideoController],
})
export class StrategyVideoModule {}
