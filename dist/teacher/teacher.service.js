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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const teacher_model_1 = require("../shared/DTO`s/teacher.model");
let TeacherService = class TeacherService {
    constructor() {
        this.testTeacher = new teacher_model_1.teacherDTO();
        this.testTeacher.name = 'محمد علی برکوک',
            this.testTeacher.grade = 'اول و دوم دبستان',
            this.testTeacher.point = 120,
            this.testTeacher.credit = 330,
            this.testTeacher.studentCount = 35,
            this.testTeacher.activitiy.exprienceQuality = 'عالی',
            this.testTeacher.activitiy.newAbility = 5,
            this.testTeacher.activitiy.questionAnswered = 100,
            this.testTeacher.activitiy.timeUsed = 240;
    }
    getTestTeacher() {
        return this.testTeacher;
    }
};
TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TeacherService);
exports.TeacherService = TeacherService;
//# sourceMappingURL=teacher.service.js.map