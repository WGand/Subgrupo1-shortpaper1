import { Content } from './Content';
import { courseSuscriptionState } from './CourseSuscriptionState';
import { Student } from '../Student/Student';
export declare class Course implements Content {
    title: string;
    category: string[];
    keyWords: string[];
    content: Content[];
    state: courseSuscriptionState;
    student: Student[];
    constructor(title: string, category: string[], keyWords: string[], content: Content[], state: courseSuscriptionState, student: Student[]);
    gettitle(): string;
    getcategory(): string[];
    getKeywords(): string[];
    getcontent(): Content[];
    getState(): courseSuscriptionState;
    getStudent(): Student[];
    settitle(title: string): void;
    setcategory(category: string[]): void;
    setkeywords(keyWords: string[]): void;
    setContent(content: Content[]): void;
    setState(state: courseSuscriptionState): void;
    setStudent(Student: Student[]): void;
    createContent(title: string, category: string[], keyWords: string[], content: Content[], state: courseSuscriptionState, student: Student[]): Course;
    deleteContent(): void;
    updateContent(): void;
    publishContent(): void;
}
