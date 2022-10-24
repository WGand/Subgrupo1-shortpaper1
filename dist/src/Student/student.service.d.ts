import { Repository } from 'typeorm';
import { createStudentDto } from './createStudent.dto';
import { Student } from './student.entity';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    findAll(params: any): Promise<Student[]>;
    findStudent(studentId: string): Promise<Student>;
    createStudent(newStudent: createStudentDto): Promise<Student>;
    deleteStudent(studentId: string): Promise<any>;
    updateStudent(studentId: string, newStudent: createStudentDto): Promise<Student>;
}
