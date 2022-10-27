import { Test, TestingModule } from '@nestjs/testing';
import { LogDecoratorController } from './LogDecorator.controller';

describe('LogDecoratorController', () => {
  let controller: LogDecoratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogDecoratorController],
    }).compile();

    controller = module.get<LogDecoratorController>(LogDecoratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
