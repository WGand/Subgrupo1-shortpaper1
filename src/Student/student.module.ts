import { Module } from '@nestjs/common';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}
