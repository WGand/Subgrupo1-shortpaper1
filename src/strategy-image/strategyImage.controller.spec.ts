import { Test, TestingModule } from '@nestjs/testing';
import { StrategyImageController } from './strategyImage.controller';

describe('StrategyImageController', () => {
  let controller: StrategyImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StrategyImageController],
    }).compile();

    controller = module.get<StrategyImageController>(StrategyImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
