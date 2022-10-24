import { Content } from './Content';
import { courseSuscriptionState } from './CourseSuscriptionState';
import { Student } from '../Student/Student';
export declare class Course implements Content {
    title: string;
    category: string[];
    keyWords: string[];
    content: Content[];
    state: courseSuscriptionState;
    student: Student;
    createContent(): void;
    deleteContent(): void;
    updateContent(): void;
    publishContent(): void;
}
