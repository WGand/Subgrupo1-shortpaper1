import { Lesson } from 'src/Domain/Lesson';
import { Student } from '../Student/Student';

export class Message {
  student: Student;
  publishedAt: Date;
  lesson: Lesson;
  content: string;

  getContent() {
    return this.content;
  }
}
