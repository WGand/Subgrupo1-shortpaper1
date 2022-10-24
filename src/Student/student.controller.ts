import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { createStudentDto } from './createStudent.dto';
import { Student } from './student.entity';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  // @Get()
  // findAll(@Req() request: Request): Student[] {
  // console.log(request.));
  // return this.studentService.findAll(request.query);
  // }

  @Get(':studentId')
  findStudent(@Param('studentId') studentId: string): Promise<Student> {
    return this.studentService.findStudent(studentId);
  }

  @Post()
  createStudent(@Body() newStudent: createStudentDto): Promise<Student> {
    return this.studentService.createStudent(newStudent);
  }

  @Delete(':studentId')
  deleteStudent(@Param('studentId') studentId: string): Promise<Student> {
    return this.studentService.deleteStudent(studentId);
  }

  @Put(':studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() updateStudent: createStudentDto,
  ): Promise<Student> {
    return this.studentService.updateStudent(studentId, updateStudent);
  }
}
