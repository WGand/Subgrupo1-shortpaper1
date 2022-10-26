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
  //import { Texto } from 'src/Texto.entity';


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

    //@OneToOne(() => Texto, { cascade: true })
    //@JoinColumn({ name: 'LessonToContentText' })
    //Texto : Texto

  }
  