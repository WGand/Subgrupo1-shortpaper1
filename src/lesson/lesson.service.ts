import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateLessonDto } from './Update Lesson.dto';
import { Repository } from 'typeorm';
import { getSystemErrorMap } from 'util';
import { CreateLessonDto } from './CreateLesson.dto';
import { Lesson } from './Lesson.entity';

@Injectable()
export class LessonService {

    constructor(
        @InjectRepository(Lesson) private LessonRepository: Repository<Lesson>,
      ) {}
    
      async findAll(params): Promise<Lesson[]> {
        return await this.LessonRepository.find();
      }  
    
  createLesson(newLesson: CreateLessonDto): Promise<Lesson> {
    console.log(newLesson);
    return this.LessonRepository.save(newLesson);
  }

  async deleteLesson(LessonId: string): Promise<any> {
    return await this.LessonRepository.delete({ LessonId: parseInt(LessonId) });
  }

  async updateLesson(
    LessonId: string,
    ToUpdateLesson: UpdateLessonDto,
  ): Promise<Lesson> {
    const toUpdate = await this.LessonRepository.findOneById(LessonId);
    const updated = Object.assign(toUpdate, ToUpdateLesson);
    console.log(ToUpdateLesson);
    return this.LessonRepository.save(updated);
  }

  async findLesson(LessonId: string) {
    return await this.LessonRepository.findOne({
      where: { LessonId: parseInt(LessonId) },
    });
  }
}