import { Module } from '@nestjs/common';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentSuscriptionState } from './StudentSuscriptionState.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, StudentSuscriptionState])],
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}
