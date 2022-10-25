import { Test, TestingModule } from '@nestjs/testing';
import { TypeLessonController } from './type-lesson.controller';

describe('TypeLessonController', () => {
  let controller: TypeLessonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeLessonController],
    }).compile();

    controller = module.get<TypeLessonController>(TypeLessonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
