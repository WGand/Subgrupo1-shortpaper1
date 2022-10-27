import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { strategyVideoDto } from './strategyVideo.dto';
import { strategyVideo } from './strategyVideo.entity';

@Injectable()
export class StrategyVideoService {
  constructor(
    @InjectRepository(strategyVideo)
    private strategyVideoRepository: Repository<strategyVideo>,
  ) {}

  createStrategyService(
    newStrategyVideo: strategyVideoDto,
  ): Promise<strategyVideo> {
    return this.strategyVideoRepository.save(newStrategyVideo);
  }

  async findStrategy(strategyVideoId: string) {
    return await this.strategyVideoRepository.findOne({
      where: { id: parseInt(strategyVideoId) },
    });
  }

  async deleteStrategy(strategyVideoId: string): Promise<any> {
    return await this.strategyVideoRepository.delete({
      id: parseInt(strategyVideoId),
    });
  }

  async updateStrategy(
    strategyVideoId: string,
    newStrategyVideo: strategyVideoDto,
  ): Promise<strategyVideo> {
    const toUpdate = await this.strategyVideoRepository.findOne({
      where: { id: parseInt(strategyVideoId) },
    });
    const updated = Object.assign(toUpdate, newStrategyVideo);
    return this.strategyVideoRepository.save(updated);
  }
}
