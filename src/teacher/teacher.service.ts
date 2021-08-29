import { Injectable } from "@nestjs/common";
import { teacherDTO } from "src/shared/DTO`s/teacher.model";

@Injectable()
export class TeacherService {
    testTeacher: teacherDTO = new teacherDTO()

    constructor() {
      this.testTeacher.name = 'محمد علی برکوک',
      this.testTeacher.grade = 'اول و دوم دبستان',
      this.testTeacher.point = 120,
      this.testTeacher.credit = 330,
      this.testTeacher.studentCount = 35,
      this.testTeacher.activitiy.exprienceQuality = 'عالی',
      this.testTeacher.activitiy.newAbility = 5,
      this.testTeacher.activitiy.questionAnswered = 100,
      this.testTeacher.activitiy.timeUsed = 240
    }
  
    getTestTeacher() {
      return this.testTeacher
    }
}