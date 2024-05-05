// routes/cart.js
import express from 'express';
import { authenticate } from '../middleware';
import { addToCart, removeFromCart, updateCart, getCart } from '../controllers/cart';

const router = express.Router();

router.use(authenticate);

router.post('/add', addToCart);
router.delete('/remove/:productId', removeFromCart);
router.put('/update', updateCart);
router.get('/', getCart);

export default router;
