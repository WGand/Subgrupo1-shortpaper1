import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Student } from 'src/Student/student.entity';
import { StudentService } from 'src/Student/student.service';

@Injectable()
export class AuthService {
  constructor(
    private studentService: StudentService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.studentService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
