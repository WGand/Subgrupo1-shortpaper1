import { Injectable, PreconditionFailedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/Student/student.entity';
import { StudentService } from 'src/Student/student.service';
import { Repository } from 'typeorm';
import { StudentSuscriptionState } from './StudentSuscriptionState.entity';
import { StudentSuscriptionStateEnum } from './StudentSuscriptionStateEnum';

@Injectable()
export class StudentsuscriptionstateService {
  constructor(
    @InjectRepository(StudentSuscriptionState)
    private studentStateRepository: Repository<StudentSuscriptionState>,
    private studentService: StudentService,
  ) {}
  async paySuscription(email: string): Promise<Student> {
    const user = await this.studentService.areCredentialsValid(email);
    let state: StudentSuscriptionState;
    if (user.suscriptionState_id === null) {
      state = new StudentSuscriptionState();
      state.type = StudentSuscriptionStateEnum.Monthly;
      state = await this.studentStateRepository.save(state);
      user.suscriptionState_id = state.id;
    } else {
      user.suscriptionState = await this.findSuscription(
        user.suscriptionState_id,
      );
      user.suscriptionState.type = StudentSuscriptionStateEnum.Monthly;
    }
    console.log(user);
    return this.studentService.updateStudent(user.email, user);
  }

  async findSuscription(
    suscriptionId: number,
  ): Promise<StudentSuscriptionState> {
    return await this.studentStateRepository.findOne({
      where: { id: suscriptionId },
    });
  }

  async cancelSuscription(email: string): Promise<Student> {
    const user = await this.studentService.areCredentialsValid(email);
    if (user.suscriptionState === null) {
      throw new PreconditionFailedException('usuario existente');
    }
    user.suscriptionState = await this.findSuscription(
      user.suscriptionState_id,
    );
    user.suscriptionState.type = StudentSuscriptionStateEnum.Blocked;
    return this.studentService.updateStudent(user.email, user);
  }
}
