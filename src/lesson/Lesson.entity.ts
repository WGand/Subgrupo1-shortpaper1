import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    OneToOne,
    JoinColumn,
  } from 'typeorm';
  import { Course } from 'src/course/course.entity';
  import { StrategyEnum } from './StrategyEnum';
  import { strategyVideo } from 'src/strategyVideo/strategyVideo.entity';
  import { strategyText } from 'src/strategyText/strategyText.entity';

  @Entity('Lesson')
  export class Lesson extends BaseEntity {
    @PrimaryGeneratedColumn()
    LessonId: number;
  
    @Column()
    Title: string;
  
    @Column('text', { array: true})
    Category: string[];
  
    @Column('text', { array: true})
    Keywords: string[];

    @Column()
    Strategy: StrategyEnum;
  
    @ManyToOne(() => Course ,{ cascade: true })
    @JoinColumn({ name: 'LessonToCourse' })
    Course: Course;

    @OneToOne(() => strategyText, { cascade: true })
    @JoinColumn({ name: 'LessonToContentText' })
    Texto : strategyText

    @OneToOne(() => strategyVideo, { cascade: true })
    @JoinColumn({ name: 'LessonToContentVideo' })
    Video : strategyVideo

  }
  