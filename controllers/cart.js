// controllers/cart.js
import { Cart } from '../models';

const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  const cartItem = await Cart.findOne({ where: { productId, userId: req.user.id } });

  if (cartItem) {
    cartItem.quantity += quantity;
    await cartItem.save();
  } else {
    await Cart.create({ productId, userId: req.user.id, quantity });
  }

  res.json({ message: 'Product added to cart' });
};

const removeFromCart = async (req, res) => {
  const { productId } = req.params;

  await Cart.destroy({ where: { productId, userId: req.user.id } });

  res.json({ message: 'Product removed from cart' });
};

const updateCart = async (req, res) => {
  const { productId, quantity } = req.body;

  const cartItem = await Cart.findOne({ where: { productId, userId: req.user.id } });

  if (cartItem) {
    cartItem.quantity = quantity;
    await cartItem.save();
  } else {
    await Cart.create({ productId, userId: req.user.id, quantity });
  }

  res.json({ message: 'Cart updated' });
};

const getCart = async (req, res) => {
  const cartItems = await Cart.findAll({ where: { userId: req.user.id } });

  res.json(cartItems);
};

export { addToCart, removeFromCart, updateCart, getCart };
