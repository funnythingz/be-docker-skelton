import { Comment } from './entities/comment.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'sample',
  logging: true,
  synchronize: false,
  entities: [Comment],
  migrations: ['dist/migration/*.js'],
});
