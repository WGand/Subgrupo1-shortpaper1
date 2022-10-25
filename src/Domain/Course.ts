import { Content } from './Content';
import { courseSuscriptionState } from './CourseSuscriptionState';
import { Student } from '../Student/Student';

export class Course implements Content {
  title: string;
  category: string[];
  keyWords: string[];
  content: Content[];
  state: courseSuscriptionState;
  student: Student[];
  
  //CONSTRUCTOR

  constructor(title: string,category: string[],keyWords: string[],content: Content[],state: courseSuscriptionState,student: Student[]){
    this.settitle(title);
    this.setcategory(category);
    this.setkeywords(keyWords);
    this.setContent(content);
    this.setState(state);
    this.setStudent(student);
  }

  // GETTERS 

  gettitle():string {
    return this.title;
  }

  getcategory():string[] {
    return this.category;
  }

  getKeywords():string[] {
    return this.keyWords;
  }

  getcontent():Content[] {
    return this.content;
  }

  getState():courseSuscriptionState {
    return this.state;
  }

  getStudent():Student[] {
    return this.student;
  }

  // SETTERS

  settitle(title:string):void {
    this.title=title;
  }

  setcategory(category:string[]):void {
    this.category=category;
  }

  setkeywords(keyWords:string[]):void {
    this.keyWords=keyWords;
  }

  setContent(content:Content[]):void {
    this.content=content;
  }

  setState(state: courseSuscriptionState):void {
    this.state=state;
  }

  setStudent(Student:Student[]):void {
    this.student=Student;
  }

  //inherited functions

  createContent(title: string,category: string[],keyWords: string[],content: Content[],state: courseSuscriptionState,student: Student[]): Course {
    return new Course(title,category,keyWords,content,state,student);
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
