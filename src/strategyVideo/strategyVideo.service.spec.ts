import { Test, TestingModule } from '@nestjs/testing';
import { StrategyVideoService } from './strategyVideo.service';

describe('StrategyVideoService', () => {
  let service: StrategyVideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StrategyVideoService],
    }).compile();

    service = module.get<StrategyVideoService>(StrategyVideoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
