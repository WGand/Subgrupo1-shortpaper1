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
  //import { strategyText } from 'src/strategy/strategyText.entity';
  //import { strategyVideo } from 'src/strategy/strategyVideo.entity';

  @Entity('Lesson')
  export class Lesson extends BaseEntity {
    @PrimaryGeneratedColumn()
    LessonId: number;
  
    @Column()
    title: string;
  
    @Column('text', { array: true, default: {} })
    category: string[];
  
    @Column('text', { array: true, default: {} })
    Keywords: string[];

    @Column()
    Strategy: StrategyEnum;
  
    @ManyToOne(() => Course ,{ cascade: true })
    @JoinColumn({ name: 'LessonToCourse' })
    Course: Course;

    //@OneToOne(() => strategyText, { cascade: true })
    //@JoinColumn({ name: 'LessonToContentText' })
    //Texto : Texto

    //@OneToOne(() => strategyVideo, { cascade: true })
    //@JoinColumn({ name: 'LessonToContentVideo' })
    //Video : Video

  }
  