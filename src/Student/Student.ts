import { Handler } from 'src/Domain/Handler';
import { StudentSuscriptionState } from './StudentSuscriptionState';

export class Student implements Handler {
  nextHandler: Handler;
  id: number;
  name: string;
  surname: string;
  suscriptionState: StudentSuscriptionState;

  requestMessage() {
    return 'whatever'; //peticion
  }

  requestSearch() {
    return 'whatever'; //peticion
  }

  handle(): void {
    throw new Error('Method not implemented.');
  }
}
