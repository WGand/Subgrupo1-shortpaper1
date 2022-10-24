import { Handler } from 'src/Domain/Handler';
import { StudentSuscriptionState } from './StudentSuscriptionState';
export declare class Student implements Handler {
    nextHandler: Handler;
    id: number;
    name: string;
    surname: string;
    suscriptionState: StudentSuscriptionState;
    requestMessage(): string;
    requestSearch(): string;
    handle(): void;
}
