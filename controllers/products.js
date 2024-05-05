// controllers/products.js
import { Product } from '../models';

const getProducts = async (req, res) => {
  const products = await Product.findAll();

  res.json(products);
};

const getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(product);
};

const createProduct = async (req, res) => {
  const { name, price } = req.body;

  const product = await Product.create({ name, price });

  res.json(product);
};

const updateProduct = async (req, res) => {
  const { name, price } = req.body;

  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  product.name = name;
  product.price = price;

  await product.save();

  res.json(product);
};

const deleteProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  await product.destroy();

  res.json({ message: 'Product deleted' });
};

export { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
