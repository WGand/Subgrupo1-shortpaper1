/* https://wanago.io/2021/11/01/api-nestjs-storing-files-postgresql-database/  */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne /* Depende de si una leccion puede tener multiples imagenes. Al no estar Lesson todavia, queda en des uso */,
  JoinColumn,
} from 'typeorm';

@Entity('strategyText')
export class strategyText extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id_strategyText', type: 'integer' })
  id: number;

  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'url', type: 'varchar' })
  url: string;

  @Column({ name: 'pages', type: 'number' })
  pages: number;
}
