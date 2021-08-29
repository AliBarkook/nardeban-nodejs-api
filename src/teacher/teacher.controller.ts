import { Controller, Get } from '@nestjs/common';
import { teacherDTO } from 'src/shared/DTO`s/teacher.model';
import { TeacherService } from './teacher.service';

@Controller('api/teacher')
export class TeacherController {
    constructor(private readonly appService: TeacherService) {}

    @Get('get')
    getHello(): teacherDTO {
      return this.appService.getTestTeacher();
    }
}
