import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

export const PORT = process.env.PORT || 3333;
export const NODE_ENV = process.env.NODE_ENV || 'development';