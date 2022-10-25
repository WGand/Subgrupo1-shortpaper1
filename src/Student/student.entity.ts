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

  @Column({ name: 'suscription_id' })
  suscriptionState_id;

  @OneToOne(() => StudentSuscriptionState, { cascade: true })
  @JoinColumn({ name: 'uscription_id' })
  suscriptionState: StudentSuscriptionState;
}
