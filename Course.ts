import { Content } from "./Content";
import { courseSuscriptionState } from "./CourseSuscriptionState";
import { Student } from "./Student";

export class Course implements Content {
    title: string;
    category: string [];
    keyWords: string [];
    content: Content [];
    state: courseSuscriptionState;
    student: Student;

    createContent(): void {
        throw new Error("Method not implemented.");
    }
    deleteContent(): void {
        throw new Error("Method not implemented.");
    }
    updateContent(): void {
        throw new Error("Method not implemented.");
    }
    publishContent(): void {
        throw new Error("Method not implemented.");
    }
}