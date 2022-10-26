import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    JoinTable,
    JoinColumn,
  } from 'typeorm';
  import { Course } from 'src/course/course.entity';

  @Entity('Lesson')
  export class Lesson extends BaseEntity {
    @PrimaryGeneratedColumn()
    CourseId: number;
  
    @Column()
    title: string;
  
    @Column('text', { array: true, default: {} })
    category: string[];
  
    @Column('text', { array: true, default: {} })
    Keywords: string[];
  
    @ManyToOne(() => Course ,{ cascade: true })
    @JoinColumn({ name: 'LessonToCourse' })
    Course: Course;

    
  }
  