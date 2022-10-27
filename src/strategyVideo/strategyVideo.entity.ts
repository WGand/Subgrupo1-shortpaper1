import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('strategyVideo')
export class strategyVideo extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id_strategyVideo', type: 'integer' })
  id: number;

  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'author', type: 'varchar' })
  author: string;

  @Column({ name: 'website', type: 'varchar' })
  website: string;

  @Column({ name: 'duration', type: 'integer' })
  duration: number;

  @Column({ name: 'url', type: 'varchar' })
  url: string;
}
