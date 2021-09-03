import { SequelizeOptions } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types';

export const config: { database: SequelizeOptions, jwtPrivateKey: string } = {
  database: {
    dialect: 'postgres' as Dialect,
    host: 'localhost',
    port: 5432,
    username: 'db_user_1',
    password: '1234',
    database: 'nest_db_1',
    logging: false,
  },
  jwtPrivateKey: 'jwtPrivateKey',
};
