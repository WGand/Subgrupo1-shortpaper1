import { Handler } from "./Handler";

export class HandlerSearch implements Handler {
    nextHandler: Handler;
    handle(): void {
        throw new Error("Method not implemented.");
    }

}