import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'sample',
  entities: ['src/**/*.entity.{ts,js}'],
  migrations: [`${__dirname}/migrations/*{.ts,.js}`],
});
