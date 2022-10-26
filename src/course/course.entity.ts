import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Student } from 'src/Student/student.entity';
import { CourseStateEnum } from './CourseStateEnum';

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

  @Column()
  state: CourseStateEnum;

  @ManyToMany(() => Student, { cascade: true })
  @JoinTable({ name: 'StudentToCourse',})
  Student: Student[];
}
