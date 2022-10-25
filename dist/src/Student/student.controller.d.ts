import { createStudentDto } from './createStudent.dto';
import { Student } from './student.entity';
import { StudentService } from './student.service';
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    findStudent(studentId: string): Promise<Student>;
    createStudent(newStudent: createStudentDto): Promise<Student>;
    deleteStudent(studentId: string): Promise<Student>;
    cancelSuscription(studentId: string): Promise<Student>;
    paySuscription(studentId: string): Promise<Student>;
    updateStudent(studentId: string, updateStudent: createStudentDto): Promise<Student>;
}
