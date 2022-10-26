import { Test, TestingModule } from '@nestjs/testing';
import { StudentsuscriptionstateService } from './studentsuscriptionstate.service';

describe('StudentsuscriptionstateService', () => {
  let service: StudentsuscriptionstateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentsuscriptionstateService],
    }).compile();

    service = module.get<StudentsuscriptionstateService>(StudentsuscriptionstateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
