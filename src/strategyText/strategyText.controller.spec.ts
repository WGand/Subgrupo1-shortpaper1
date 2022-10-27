import { Test, TestingModule } from '@nestjs/testing';
import { StrategyTextController } from './strategyText.controller';

describe('StrategyTextController', () => {
  let controller: StrategyTextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StrategyTextController],
    }).compile();

    controller = module.get<StrategyTextController>(StrategyTextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
