import { Injectable, PreconditionFailedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './CreateCourseDto';
import { UpdateCourseDto } from './UpdateCourseDto';
import { Course } from './course.entity';
import { MailDecoratorService } from 'src/MailDecorator/MailDecorator.service';
import { StudentService } from 'src/Student/student.service';
import { StudentSuscriptionStateEnum } from 'src/studentsuscriptionstate/StudentSuscriptionStateEnum';
import { StudentsuscriptionstateService } from 'src/studentsuscriptionstate/studentsuscriptionstate.service';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course) private CourseRepository: Repository<Course>,
    private mailDecoratorService: MailDecoratorService,
    private studentService: StudentService,
    private studentSuscriptionStateService: StudentsuscriptionstateService,
  ) {}

  async sendMail(email: string, tituloCurso: string, Message:string,State:string) {
    const user = await this.studentService.findOne(email);
    this.mailDecoratorService.enviarcorreo(
      user.email,
      tituloCurso + State,
      Message,
    );
  }

  async findAll(params): Promise<Course[]> {
    return await this.CourseRepository.find();
  }

  createCourse(newCourse: CreateCourseDto): Promise<Course> {
    return this.CourseRepository.save(newCourse);
  }

  async DeleteCourse(CourseId: string): Promise<Course> {
    const ToPublish = await this.CourseRepository.findOneById(CourseId);
    ToPublish.state = 3;
    const arrayStudent = await this.studentService.findAll();
    arrayStudent.forEach((element) => {
      this.sendMail(element.email, ToPublish.title,'Se ha Elimininado un curso','Eliminado');
    });
    return this.CourseRepository.save(ToPublish);
  }

  async SuspendCourse(CourseId: string): Promise<Course> {
    const ToPublish = await this.CourseRepository.findOneById(CourseId);
    ToPublish.state = 4;
    const arrayStudent = await this.studentService.findAll();
    arrayStudent.forEach((element) => {
      this.sendMail(element.email, ToPublish.title,'Se ha Suspendido un curso','Suspendido');
    });
    return this.CourseRepository.save(ToPublish);
  }

  async suscriptionToCourse(email: string, CourseId: string): Promise<any> {
    const user = await this.studentService.findOne(email);
    console.log(user);
    const course = await this.CourseRepository.findOne({
      where: { CourseId: parseInt(CourseId) },
    });
    course.Student = await this.CourseRepository.query(
      'SELECT * FROM StudentToCourse',
    );
    user.suscriptionState =
      await this.studentSuscriptionStateService.findSuscription(
        user.suscriptionState_id,
      );
    if (user.suscriptionState !== undefined) {
      if (
        user.suscriptionState.type === StudentSuscriptionStateEnum.Monthly &&
        course.state === 2
      ) {
        course.Student.push(user);
        return this.CourseRepository.save(course);
      }
    }
    throw new PreconditionFailedException('usuario bloqueado');
  }

  async updateCourse(
    Id: string,
    UpdateCourse: UpdateCourseDto,
  ): Promise<Course> {
    const toUpdate = await this.CourseRepository.findOne({
      where: { CourseId: parseInt(Id) },
    });
    const updated = Object.assign(toUpdate, UpdateCourse);
    return this.CourseRepository.save(updated);
  }

  async findCourse(CourseId: string) {
    return await this.CourseRepository.findOne({
      where: { CourseId: parseInt(CourseId) },
    });
  }

  async PublishCourse(CourseId: string): Promise<Course> {
    const ToPublish = await this.CourseRepository.findOneById(CourseId);
    ToPublish.state = 2;
    const arrayStudent = await this.studentService.findAll();
    arrayStudent.forEach((element) => {
      this.sendMail(element.email, ToPublish.title);
    });
    return this.CourseRepository.save(ToPublish);
  }
}
