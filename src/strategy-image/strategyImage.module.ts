import { Module } from '@nestjs/common';
import { StrategyImageController } from './strategyImage.controller';
import { StrategyImageService } from './strategyImage.service';

@Module({
  controllers: [StrategyImageController],
  providers: [StrategyImageService],
})
export class StrategyImageModule {}
