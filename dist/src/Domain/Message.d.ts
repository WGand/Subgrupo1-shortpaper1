import { Lesson } from './Lesson';
import { Student } from '../Student/Student';
export declare class Message {
    student: Student;
    publishedAt: Date;
    lesson: Lesson;
    content: string;
    getContent(): string;
}
