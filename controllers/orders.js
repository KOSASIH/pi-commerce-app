// controllers/orders.js
import { Order } from '../models';
import { Cart } from '../models';

const createOrder = async (req, res) => {
  const { address, paymentMethod } = req.body;

  const cartItems = await Cart.findAll({ where: { userId: req.user.id } });

  const order = await Order.create({
    userId: req.user.id,
    address,
    paymentMethod,
    total: cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
  });

  await Order.bulkCreate(
    cartItems.map((item) => ({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
      price: item.product.price,
    }))
  );

  await Cart.destroy({ where: { userId: req.user.id } });

  res.json(order);
};

const getOrders = async (req, res) => {
  const orders = await Order.findAll({ where: { userId: req.user.id } });

  res.json(orders);
};

export { createOrder, getOrders };
