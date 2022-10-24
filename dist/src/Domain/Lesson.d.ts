import { Content } from './Content';
import { Message } from 'src/Message/Message';
export declare class Lesson implements Content {
    title: string;
    category: string[];
    keyWords: string[];
    message: Message[];
    createContent(): void;
    deleteContent(): void;
    updateContent(): void;
    publishContent(): void;
}
