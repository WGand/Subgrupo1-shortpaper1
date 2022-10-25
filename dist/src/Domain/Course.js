"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
class Course {
    constructor(title, category, keyWords, content, state, student) {
        this.settitle(title);
        this.setcategory(category);
        this.setkeywords(keyWords);
        this.setContent(content);
        this.setState(state);
        this.setStudent(student);
    }
    gettitle() {
        return this.title;
    }
    getcategory() {
        return this.category;
    }
    getKeywords() {
        return this.keyWords;
    }
    getcontent() {
        return this.content;
    }
    getState() {
        return this.state;
    }
    getStudent() {
        return this.student;
    }
    settitle(title) {
        this.title = title;
    }
    setcategory(category) {
        this.category = category;
    }
    setkeywords(keyWords) {
        this.keyWords = keyWords;
    }
    setContent(content) {
        this.content = content;
    }
    setState(state) {
        this.state = state;
    }
    setStudent(Student) {
        this.student = Student;
    }
    createContent(title, category, keyWords, content, state, student) {
        return new Course(title, category, keyWords, content, state, student);
    }
    deleteContent() {
        throw new Error('Method not implemented.');
    }
    updateContent() {
        throw new Error('Method not implemented.');
    }
    publishContent() {
        throw new Error('Method not implemented.');
    }
}
exports.Course = Course;
//# sourceMappingURL=Course.js.map