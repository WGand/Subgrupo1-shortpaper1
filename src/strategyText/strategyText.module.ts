import { Module } from '@nestjs/common';
import { strategyText } from './strategyText.entity';
import { StrategyTextService } from './strategyText.service';
import { StrategyTextController } from './strategyText.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([strategyText])],
  providers: [StrategyTextService],
  controllers: [StrategyTextController],
})
export class StrategyImageModule {}
