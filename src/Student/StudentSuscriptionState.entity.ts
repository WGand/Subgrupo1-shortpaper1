import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { StudentSuscriptionStateEnum } from './StudentSuscriptionStateEnum';

@Entity('StudentSuscriptionState')
export class StudentSuscriptionState extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'id_studentsuscriptionstate',
    type: 'integer',
  })
  id: number;

  @Column({ name: 'cost', type: 'integer' })
  cost: number;

  @Column()
  type: StudentSuscriptionStateEnum;

  @Column({ name: 'createdAt', type: 'date' })
  createdAt: Date;

  @Column({ name: 'paidAt', type: 'date' })
  paidAt: Date;

  @Column({ name: 'closedAt', type: 'date' })
  closedAt: Date;
}
