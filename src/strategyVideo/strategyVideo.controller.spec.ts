import { Test, TestingModule } from '@nestjs/testing';
import { StrategyVideoController } from './strategyVideo.controller';

describe('StrategyVideoController', () => {
  let controller: StrategyVideoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StrategyVideoController],
    }).compile();

    controller = module.get<StrategyVideoController>(StrategyVideoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
