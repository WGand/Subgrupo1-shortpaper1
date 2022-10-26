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

  @Column('text', { array: true, default: {} })
  category: string[];

  @Column('text', { array: true, default: {} })
  Keywords: string[];

  @Column( { default: '9' })
  state: CourseSuscriptionStateEnum;

  @ManyToMany(() => Student, { cascade: true })
  @JoinTable({ name: 'StudentToCourse' })
  Student: Student[];
}