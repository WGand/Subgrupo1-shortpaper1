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
  @PrimaryGeneratedColumn({ name: 'id_student', type: 'integer' })
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'surname', type: 'varchar' })
  surname: string;

  @Column({ name: 'suscription_id', nullable: true })
  suscriptionState_id: number;

  @OneToOne(() => StudentSuscriptionState, { cascade: true })
  @JoinColumn({ name: 'suscription_id' })
  suscriptionState: StudentSuscriptionState;
}
