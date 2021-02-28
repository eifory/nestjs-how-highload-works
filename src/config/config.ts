import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const checkInstalledInterval = process.env.INTERVAL_CHECK_INSTALLED_SENSORS;
export const sendDataInterval = process.env.INTERVAL_SENSOR_SEND_DATA;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  autoLoadEntities: true,
}