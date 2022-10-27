import { Get, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { strategyTextDto } from './strategyText.dto';
import { strategyText } from './strategyText.entity';

@Injectable()
export class StrategyTextService {
  constructor(
    @InjectRepository(strategyText)
    private strategyTextRepository: Repository<strategyText>,
  ) {}

  createStrategyService(
    /* CreateLesson */
    newStrategyText: strategyTextDto,
  ): Promise<strategyText> {
    return this.strategyTextRepository.save(newStrategyText);
  }

  async findStrategy(strategyTextId: string) {
    return await this.strategyTextRepository.findOne({
      where: { id: parseInt(strategyTextId) },
    });
  }

  async deleteStrategy(strategyTextId: string): Promise<any> {
    return await this.strategyTextRepository.delete({
      id: parseInt(strategyTextId),
    });
  }

  async updateStrategy(
    strategyTextId: string,
    newStrategyText: strategyTextDto,
  ): Promise<strategyText> {
    const toUpdate = await this.strategyTextRepository.findOne({
      where: { id: parseInt(strategyTextId) },
    });
    const updated = Object.assign(toUpdate, newStrategyText);
    return this.strategyTextRepository.save(updated);
  }
}
