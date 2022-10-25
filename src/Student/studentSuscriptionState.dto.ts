import { StudentSuscriptionStateEnum } from './StudentSuscriptionStateEnum';

export class StudentSuscriptionState {
  readonly cost: number;
  readonly type: StudentSuscriptionStateEnum;
  readonly createdAt: Date;
  readonly paidAt: Date;
}
