import { teacherDTO } from 'src/shared/DTO`s/teacher.model';
import { TeacherService } from './teacher.service';
export declare class TeacherController {
    private readonly appService;
    constructor(appService: TeacherService);
    getHello(): teacherDTO;
}
