import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToMany,
    JoinTable,
  } from 'typeorm';
  import { Student } from 'src/Student/Student.entity';
  import { CourseSuscriptionStateEnum } from './CourseSubscriptionStateEnum';
  
  @Entity('course')
  export class Course extends BaseEntity {
    @PrimaryGeneratedColumn()
    CourseId: number;
  
    @Column()
    title: string;
  
    @Column({ array: true })
    category: string[];
  
    @Column( { array: true })
    Keywords: string[];

    @Column()
    state: CourseSuscriptionStateEnum;

    @ManyToMany(() => Student)
    @JoinTable()
    Student: Student[];
  }
  