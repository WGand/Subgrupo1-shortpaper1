import { Module } from '@nestjs/common';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentSuscriptionState } from './../studentsuscriptionstate/StudentSuscriptionState.entity';
import { StudentsuscriptionstateService } from 'src/studentsuscriptionstate/studentsuscriptionstate.service';
import { StudentsuscriptionstateController } from 'src/studentsuscriptionstate/studentsuscriptionstate.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Student, StudentSuscriptionState])],
  providers: [StudentService, StudentsuscriptionstateService],
  controllers: [StudentController, StudentsuscriptionstateController],
  exports: [StudentService],
})
export class StudentModule {}
