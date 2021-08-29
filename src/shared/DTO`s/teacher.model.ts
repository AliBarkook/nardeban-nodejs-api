export class teacherDTO {
    name: string;
    grade: string;
    credit: number;
    studentCount: number;
    point: number;
    activitiy: activityModel = new activityModel()
}

class activityModel {
    questionAnswered: number;
    timeUsed: number;
    newAbility: number;
    exprienceQuality: string;
}