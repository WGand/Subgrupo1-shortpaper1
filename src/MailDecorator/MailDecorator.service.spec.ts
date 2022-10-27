import { Test, TestingModule } from '@nestjs/testing';
import { MailDecoratorService } from './MailDecorator.service';

describe('MailDecoratorService', () => {
  let service: MailDecoratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailDecoratorService],
    }).compile();

    service = module.get<MailDecoratorService>(MailDecoratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
