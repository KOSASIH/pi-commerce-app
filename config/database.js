// config/database.js
import dotenv from 'dotenv';
import Sequelize from 'sequelize';

dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
);

export async function connectDB() {
  try {
    await db.authenticate();
    console.log('Database connection established');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

export default db;
