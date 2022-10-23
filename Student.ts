import { StudentSuscriptionState } from "./StudentSuscriptionState";

export class Student {
    name: string;
    surname: string;
    suscriptionState: StudentSuscriptionState;

    requestMessage() {
        return 'whatever' //peticion
    }

    requestSearch() {
        return 'whatever' //peticion
    }
}