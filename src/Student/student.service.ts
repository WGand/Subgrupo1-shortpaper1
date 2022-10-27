import {
  Injectable,
  PreconditionFailedException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createStudentDto } from './createStudent.dto';
import { Student } from './student.entity';
import { updateStudentDto } from './updateStudent.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return await this.studentRepository.query('SELECT * FROM STUDENT');
  }

  async areCredentialsValid(email: string) {
    const user = await this.studentRepository.findOne({
      where: { email: email },
    });
    console.log(user);
    if (user) {
      return user;
    }
    throw new UnauthorizedException('invalido');
  }

  async findOne(email: string) {
    return this.areCredentialsValid(email);
  }

  async findStudent(email: string): Promise<any> {
    const { password, ...result } = await this.findOne(email);

    return result;
  }

  createStudent(newStudent: createStudentDto): Promise<Student> {
    const user = this.studentRepository.findOne({
      where: { email: newStudent.email },
    });
    if (!user) {
      console.log(!user);
      throw new PreconditionFailedException('usuario existente');
    }
    return this.studentRepository.save(newStudent);
  }

  async deleteStudent(email: string): Promise<any> {
    return await this.findOne(email);
  }

  async updateStudent(
    email: string,
    newStudent: updateStudentDto,
  ): Promise<any> {
    const user = await this.findOne(email);
    if (!user) {
      throw new PreconditionFailedException('usuario existente');
    }
    const updated = Object.assign(user, newStudent);
    return this.studentRepository.save(updated);
  }
}
