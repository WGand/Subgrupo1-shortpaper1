import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { StudentSuscriptionStateEnum } from './StudentSuscriptionStateEnum';

@Entity('StudentSuscriptionState')
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cost: number;

  @Column()
  type: StudentSuscriptionStateEnum;

  @Column()
  createdAt: Date;

  @Column()
  paidAt: Date;

  @Column()
  closedAt: Date;
}
