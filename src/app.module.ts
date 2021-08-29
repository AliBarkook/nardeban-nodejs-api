import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherController } from './teacher/teacher.controller';
import { taecherModlule } from './teacher/teacher.module';

@Module({
  imports: [taecherModlule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
