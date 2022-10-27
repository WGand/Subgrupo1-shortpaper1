import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { createStudentDto } from './createStudent.dto';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { updateStudentDto } from './updateStudent.dto';

@Controller('student')
export class StudentController {
  constructor(
    private studentService: StudentService,
    private authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findStudent(@Request() req): Promise<any> {
    return this.studentService.findStudent(req.user.email);
  }

  @UseGuards(JwtAuthGuard)
  @Get('mail')
  mail(@Request() req): void {
    this.studentService.sendMail(req.user.email);
  }

  @Post()
  signUp(@Body() newStudent: createStudentDto): Promise<Student> {
    return this.studentService.createStudent(newStudent);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteStudent(@Request() req): Promise<any> {
    return this.studentService.deleteStudent(req.user.email);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  updateStudent(
    @Request() req,
    @Body() updateStudent: updateStudentDto,
  ): Promise<Student> {
    return this.studentService.updateStudent(req.user.email, updateStudent);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
