// server.js
import express from 'express';
import cors from 'cors';
import { Sequelize } from 'sequelize';
import { dbConfig } from './config';
import authRoutes from './routes/auth';
import cartRoutes from './routes/cart';
import ordersRoutes from './routes/orders';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', ordersRoutes);

const sequelize = new Sequelize(dbConfig);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
