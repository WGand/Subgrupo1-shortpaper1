"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.StudentController = void 0;
var common_1 = require("@nestjs/common");
var StudentController = /** @class */ (function () {
    function StudentController(studentService) {
        this.studentService = studentService;
    }
    // @Get()
    // findAll(@Req() request: Request): Student[] {
    // console.log(request.));
    // return this.studentService.findAll(request.query);
    // }
    StudentController.prototype.findStudent = function (studentId) {
        return this.studentService.findStudent(studentId);
    };
    StudentController.prototype.createStudent = function (newStudent) {
        return this.studentService.createStudent(newStudent);
    };
    StudentController.prototype.deleteStudent = function (studentId) {
        return this.studentService.deleteStudent(studentId);
    };
    StudentController.prototype.paySuscription = function (studentId) {
        return this.studentService.paySuscription(studentId);
    };
    StudentController.prototype.updateStudent = function (studentId, updateStudent) {
        return this.studentService.updateStudent(studentId, updateStudent);
    };
    __decorate([
        (0, common_1.Get)(':studentId'),
        __param(0, (0, common_1.Param)('studentId'))
    ], StudentController.prototype, "findStudent");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], StudentController.prototype, "createStudent");
    __decorate([
        (0, common_1.Delete)(':studentId'),
        __param(0, (0, common_1.Param)('studentId'))
    ], StudentController.prototype, "deleteStudent");
    __decorate([
        (0, common_1.Put)('pay/:studentId'),
        __param(0, (0, common_1.Param)('studentId'))
    ], StudentController.prototype, "paySuscription");
    __decorate([
        (0, common_1.Put)(':studentId'),
        __param(0, (0, common_1.Param)('studentId')),
        __param(1, (0, common_1.Body)())
    ], StudentController.prototype, "updateStudent");
    StudentController = __decorate([
        (0, common_1.Controller)('student')
    ], StudentController);
    return StudentController;
}());
exports.StudentController = StudentController;
