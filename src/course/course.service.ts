
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './CreateCourseDto';
import { Course } from './course.entity';

@Injectable()
export class CourseService {

    constructor(
        @InjectRepository(Course) private CourseRepository: Repository<Course>,
      ) {}
    
      async findAll(params): Promise<Course[]> {
        return await this.CourseRepository.find();
      }  
    
  createCourse(newStudent: CreateCourseDto): Promise<Course> {
    return this.CourseRepository.save(newStudent);
  }

  async deleteCourse(CourseId: string): Promise<any> {
    return await this.CourseRepository.delete({ Courseid: parseInt(CourseId) });
  }

  async updateStudent(
    CourseId: string,
    newCourse: CreateCourseDto,
  ): Promise<Course> {
    const toUpdate = await this.CourseRepository.findOneById(CourseId);
    const updated = Object.assign(toUpdate, newCourse);
    return this.CourseRepository.save(updated);
  }

  async findCourse(CourseId: string) {
    return await this.CourseRepository.findOne({
      where: { id: parseInt(CourseId) },
    });
  }

}

