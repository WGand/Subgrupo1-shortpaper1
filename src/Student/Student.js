"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.requestMessage = function () {
        return 'whatever'; //peticion
    };
    Student.prototype.requestSearch = function () {
        return 'whatever'; //peticion
    };
    Student.prototype.handle = function () {
        throw new Error('Method not implemented.');
    };
    return Student;
}());
exports.Student = Student;
