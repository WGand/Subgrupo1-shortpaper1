"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_entity_1 = require("./student.entity");
const StudentSuscriptionState_entity_1 = require("./StudentSuscriptionState.entity");
const StudentSuscriptionStateEnum_1 = require("./StudentSuscriptionStateEnum");
let StudentService = class StudentService {
    constructor(studentRepository, studentSuscriptionStateRepository) {
        this.studentRepository = studentRepository;
        this.studentSuscriptionStateRepository = studentSuscriptionStateRepository;
    }
    async findAll() {
        return await this.studentRepository.find();
    }
    async paySuscription(studentId) {
        const student = await this.studentRepository.findOne({
            where: { id: parseInt(studentId) },
        });
        student.suscriptionState = new StudentSuscriptionState_entity_1.StudentSuscriptionState();
        student.suscriptionState.type = StudentSuscriptionStateEnum_1.StudentSuscriptionStateEnum.Monthly;
        return this.studentRepository.save(student);
    }
    async cancelSuscription(studentId) {
        const student = await this.studentRepository.findOne({
            where: { id: parseInt(studentId) },
        });
        console.log(student);
        student.suscriptionState =
            await this.studentSuscriptionStateRepository.findOne({
                where: { id: student.suscriptionState_id },
            });
        student.suscriptionState.type = StudentSuscriptionStateEnum_1.StudentSuscriptionStateEnum.Blocked;
        return this.studentRepository.save(student);
    }
    async findStudent(studentId) {
        return await this.studentRepository.findOne({
            where: { id: parseInt(studentId) },
        });
    }
    createStudent(newStudent) {
        return this.studentRepository.save(newStudent);
    }
    async deleteStudent(studentId) {
        return await this.studentRepository.delete({ id: parseInt(studentId) });
    }
    async updateStudent(studentId, newStudent) {
        const toUpdate = await this.studentRepository.findOneById(studentId);
        const updated = Object.assign(toUpdate, newStudent);
        return this.studentRepository.save(updated);
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __param(1, (0, typeorm_1.InjectRepository)(StudentSuscriptionState_entity_1.StudentSuscriptionState)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map