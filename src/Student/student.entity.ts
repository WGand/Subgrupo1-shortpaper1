import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { StudentSuscriptionState } from './StudentSuscriptionState.entity';

@Entity('student')
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @OneToOne(() => StudentSuscriptionState)
  @JoinColumn()
  suscriptionState: StudentSuscriptionState;
}
