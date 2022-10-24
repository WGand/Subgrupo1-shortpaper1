import { Handler } from './Handler';

export class HandlerLog implements Handler {
  nextHandler: Handler;
  handle(): void {
    throw new Error('Method not implemented.');
  }
}
