import { Test, TestingModule } from '@nestjs/testing';
import { LogDecoratorService } from './LogDecorator.service';

describe('LogDecoratorService', () => {
  let service: LogDecoratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogDecoratorService],
    }).compile();

    service = module.get<LogDecoratorService>(LogDecoratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
