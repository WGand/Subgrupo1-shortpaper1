import { Test, TestingModule } from '@nestjs/testing';
import { StrategyImageService } from './strategyText.service';

describe('StrategyImageService', () => {
  let service: StrategyImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StrategyImageService],
    }).compile();

    service = module.get<StrategyImageService>(StrategyImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
