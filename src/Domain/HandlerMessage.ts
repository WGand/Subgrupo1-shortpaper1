import { Handler } from './Handler';

export class HandlerMessage implements Handler {
  nextHandler: Handler;
  handle(): void {
    throw new Error('Method not implemented.');
  }
}
