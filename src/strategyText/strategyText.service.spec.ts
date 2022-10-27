import { Test, TestingModule } from '@nestjs/testing';
import { StrategyTextService } from './strategyText.service';

describe('StrategyImageService', () => {
  let service: StrategyTextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StrategyTextService],
    }).compile();

    service = module.get<StrategyTextService>(StrategyTextService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
