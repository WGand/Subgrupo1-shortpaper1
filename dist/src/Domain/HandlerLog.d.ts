import { Handler } from './Handler';
export declare class HandlerLog implements Handler {
    nextHandler: Handler;
    handle(): void;
}
