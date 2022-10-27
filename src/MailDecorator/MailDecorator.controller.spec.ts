import { Test, TestingModule } from '@nestjs/testing';
import { MailDecoratorController } from './MailDecorator.controller';

describe('MailDecoratorController', () => {
  let controller: MailDecoratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailDecoratorController],
    }).compile();

    controller = module.get<MailDecoratorController>(MailDecoratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
