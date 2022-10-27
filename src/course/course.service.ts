import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './CreateCourseDto';
import { Course } from './course.entity';
import { CourseStateEnum } from './CourseStateEnum';


@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course) private CourseRepository: Repository<Course>,
  ) {}

  async findAll(params): Promise<Course[]> {
    return await this.CourseRepository.find();
  }

  createCourse(newCourse: CreateCourseDto): Promise<Course> {
    return this.CourseRepository.save(newCourse);
  }

  async deleteCourse(CourseId: string): Promise<any> {
    return await this.CourseRepository.delete({ CourseId: parseInt(CourseId) });
  }

  async updateCourse(
    CourseId: string,
    newCourse: CreateCourseDto,
  ): Promise<Course> {
    const toUpdate = await this.CourseRepository.findOneById(CourseId);
    const updated = Object.assign(toUpdate, newCourse);
    return this.CourseRepository.save(updated);
  }

  async findCourse(CourseId: string) {
    return await this.CourseRepository.findOne({
      where: { CourseId: parseInt(CourseId) },
    });
  }

  async PublishCourse(CourseId: string): Promise<Course> {
    const ToPublish = await this.CourseRepository.findOneById(CourseId);
    ToPublish.state = CourseStateEnum.Published;
    console.log('Se ha publicado el curso');
    return this.CourseRepository.save(ToPublish);
  }

}
