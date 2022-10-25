import { Repository } from 'typeorm';
import { createStudentDto } from './createStudent.dto';
import { Student } from './student.entity';
import { StudentSuscriptionState } from './StudentSuscriptionState.entity';
export declare class StudentService {
    private studentRepository;
    private studentSuscriptionState;
    constructor(studentRepository: Repository<Student>, studentSuscriptionState: Repository<StudentSuscriptionState>);
    findAll(params: any): Promise<Student[]>;
    paySuscription(studentId: string): Promise<Student>;
    findStudent(studentId: string): Promise<Student>;
    createStudent(newStudent: createStudentDto): Promise<Student>;
    deleteStudent(studentId: string): Promise<any>;
    updateStudent(studentId: string, newStudent: createStudentDto): Promise<Student>;
}
