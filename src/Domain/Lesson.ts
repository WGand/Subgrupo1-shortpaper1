import { Content } from './Content';
import { Message } from 'src/Message/Message';

export class Lesson implements Content {
  title: string;
  category: string[];
  keyWords: string[];
  message: Message[];

  createContent(): void {
    throw new Error('Method not implemented.');
  }
  deleteContent(): void {
    throw new Error('Method not implemented.');
  }
  updateContent(): void {
    throw new Error('Method not implemented.');
  }
  publishContent(): void {
    throw new Error('Method not implemented.');
  }
}
