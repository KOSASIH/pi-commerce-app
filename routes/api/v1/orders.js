// routes/api/v1/orders.js
import express from 'express';
import { createOrder, getOrders } from '../controllers/orders';

const router = express.Router();

router.post('/', createOrder);
router.get('/', getOrders);

export default router;
