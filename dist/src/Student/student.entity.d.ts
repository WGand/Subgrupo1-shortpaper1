import { BaseEntity } from 'typeorm';
import { StudentSuscriptionState } from './StudentSuscriptionState.entity';
export declare class Student extends BaseEntity {
    id: number;
    name: string;
    surname: string;
    suscriptionState_id: any;
    suscriptionState: StudentSuscriptionState;
}
