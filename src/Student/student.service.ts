import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createStudentDto } from './createStudent.dto';
import { Student } from './student.entity';
import { StudentSuscriptionState } from './StudentSuscriptionState.entity';
import { StudentSuscriptionStateEnum } from './StudentSuscriptionStateEnum';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
    @InjectRepository(StudentSuscriptionState)
    private studentSuscriptionStateRepository: Repository<StudentSuscriptionState>,
  ) {}

  async findAll(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async paySuscription(studentId: string): Promise<Student> {
    const student = await this.studentRepository.findOne({
      where: { id: parseInt(studentId) },
    });
    student.suscriptionState = new StudentSuscriptionState(); //preguntar si existe other crear
    student.suscriptionState.type = StudentSuscriptionStateEnum.Monthly;
    return this.studentRepository.save(student);
  }

  async cancelSuscription(studentId: string): Promise<Student> {
    const student: Student = await this.studentRepository.findOne({
      where: { id: parseInt(studentId) },
    });
    console.log(student);
    student.suscriptionState =
      await this.studentSuscriptionStateRepository.findOne({
        where: { id: student.suscriptionState_id },
      });
    student.suscriptionState.type = StudentSuscriptionStateEnum.Blocked;
    return this.studentRepository.save(student);
  }

  async findStudent(studentId: string): Promise<Student> {
    return await this.studentRepository.findOne({
      where: { id: parseInt(studentId) },
    });
  }

  createStudent(newStudent: createStudentDto): Promise<Student> {
    return this.studentRepository.save(newStudent);
  }

  async deleteStudent(studentId: string): Promise<any> {
    return await this.studentRepository.delete({ id: parseInt(studentId) });
  }

  async updateStudent(
    studentId: string,
    newStudent: createStudentDto,
  ): Promise<Student> {
    const toUpdate = await this.studentRepository.findOneById(studentId);
    const updated = Object.assign(toUpdate, newStudent);
    return this.studentRepository.save(updated);
  }
}
