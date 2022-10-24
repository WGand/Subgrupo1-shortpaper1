export interface Handler {
  nextHandler: Handler;
  handle(): void;
}
