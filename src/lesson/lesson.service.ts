import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { strategyText } from 'src/strategyText/strategyText.entity';
import { strategyVideo } from 'src/strategyVideo/strategyVideo.entity';
import { Repository } from 'typeorm';
import { CreateLessonDto } from './CreateLesson.dto';
import { Lesson } from './Lesson.entity';

@Injectable()
export class LessonService {

    constructor(
        @InjectRepository(Lesson) private LessonRepository: Repository<Lesson>,
        @InjectRepository(Lesson) private strategyTextRepository: Repository<strategyText>
        @InjectRepository(Lesson) private strategyVideoRepository: Repository<strategyVideo>
      ) {}
    
      async findAll(params): Promise<Lesson[]> {
        return await this.LessonRepository.find();
      }  
    
  createLesson(newLesson: CreateLessonDto): Promise<Lesson> {
    return this.LessonRepository.save(newLesson);
  }

  async deleteLesson(LessonId: string): Promise<any> {
    return await this.LessonRepository.delete({ LessonId: parseInt(LessonId) });
  }

  async updateLesson(
    LessonId: string,
    newLesson: CreateLessonDto,
  ): Promise<Lesson> {
    const toUpdate = await this.LessonRepository.findOneById(LessonId);
    const updated = Object.assign(toUpdate, newLesson);
    return this.LessonRepository.save(updated);
  }

  async findLesson(LessonId: string) {
    return await this.LessonRepository.findOne({
      where: { LessonId: parseInt(LessonId) },
    });
  }
}