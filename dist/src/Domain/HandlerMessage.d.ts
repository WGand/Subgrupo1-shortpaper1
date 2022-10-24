import { Handler } from './Handler';
export declare class HandlerMessage implements Handler {
    nextHandler: Handler;
    handle(): void;
}
