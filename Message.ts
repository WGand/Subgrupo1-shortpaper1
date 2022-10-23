import { Lesson } from "./Lesson";
import { Student } from "./Student";

export class Message {
    student: Student;
    publishedAt: Date;
    lesson: Lesson;
    content: String;

    getContent() {
        return this.content;
    }
}