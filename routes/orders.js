// routes/orders.js
import express from 'express';
import { authenticate } from '../middleware';
import { createOrder, getOrders } from '../controllers/orders';

const router = express.Router();

router.use(authenticate);

router.post('/create', createOrder);
router.get('/', getOrders);

export default router;
