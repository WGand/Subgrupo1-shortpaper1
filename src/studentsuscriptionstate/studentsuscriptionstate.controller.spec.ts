import { Test, TestingModule } from '@nestjs/testing';
import { StudentsuscriptionstateController } from './studentsuscriptionstate.controller';

describe('StudentsuscriptionstateController', () => {
  let controller: StudentsuscriptionstateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsuscriptionstateController],
    }).compile();

    controller = module.get<StudentsuscriptionstateController>(StudentsuscriptionstateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
