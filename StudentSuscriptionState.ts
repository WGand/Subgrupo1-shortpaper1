import { StudentSuscriptionStateEnum } from "./StudentSuscriptionStateEnum";

export class StudentSuscriptionState {
    id: number;
    cost: number;
    type: StudentSuscriptionStateEnum;
    createdAt: Date;
    paidAt: Date;
    closeAt: Date;
}