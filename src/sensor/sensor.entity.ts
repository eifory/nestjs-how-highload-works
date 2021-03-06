import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";
import { SensorStatus } from "./sensor-status.enum";

@Entity()
@Unique(['sn'])
export class Sensor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 64 })
  sn: string;

  @Column('int4')
  model_id: number;
  
  @Column({ type: 'enum', enum: SensorStatus, default: SensorStatus.STORED })
  status: SensorStatus;
}
