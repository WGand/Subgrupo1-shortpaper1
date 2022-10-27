import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { StudentsuscriptionstateService } from './studentsuscriptionstate.service';

@Controller('suscription')
export class StudentsuscriptionstateController {
  constructor(
    private studentSuscriptionState: StudentsuscriptionstateService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('pay')
  findStudent(@Request() req): Promise<any> {
    return this.studentSuscriptionState.paySuscription(req.user.email);
  }

  @UseGuards(JwtAuthGuard)
  @Get('cancel')
  cancelSuscription(@Request() req): Promise<any> {
    return this.studentSuscriptionState.cancelSuscription(req.user.email);
  }
}
