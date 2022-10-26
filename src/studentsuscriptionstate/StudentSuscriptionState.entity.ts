import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { StudentSuscriptionStateEnum } from './StudentSuscriptionStateEnum';

@Entity('StudentSuscriptionState')
export class StudentSuscriptionState extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'id_studentsuscriptionstate',
    type: 'integer',
  })
  id: number;

  @Column({ name: 'cost', type: 'integer', default: '9' })
  cost: number;

  @Column()
  type: StudentSuscriptionStateEnum;

  @Column({ name: 'createdAt', type: 'date', default: () => 'CURRENT_DATE' })
  createdAt: Date;

  @Column({ name: 'paidAt', type: 'date', default: () => 'CURRENT_DATE' })
  paidAt: Date;
}
