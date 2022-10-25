/* https://wanago.io/2021/11/01/api-nestjs-storing-files-postgresql-database/  */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne /* Depende de si una leccion puede tener multiples imagenes */,
  JoinColumn,
} from 'typeorm';

@Entity('strategy-image')
export class strategyImage extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id_image', type: 'integer' })
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;
}
