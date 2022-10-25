import { Test, TestingModule } from '@nestjs/testing';
import { TypeLessonService } from './type-lesson.service';

describe('TypeLessonService', () => {
  let service: TypeLessonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeLessonService],
    }).compile();

    service = module.get<TypeLessonService>(TypeLessonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
