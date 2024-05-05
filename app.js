// app.js
import express from 'express';
import { connectDB } from './config/database';
import { initServer } from './config/server';
import routes from './routes';

const app = express();

async function initApp() {
  try {
    await connectDB();
    initServer(app);
    app.use('/api/v1', routes);
    app.listen(3000, () => {
      console.log('Server listening on port 3000');
    });
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

initApp();
