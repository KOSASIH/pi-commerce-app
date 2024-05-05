// web/index.js
import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { engine } from 'express-handlebars';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct, createOrder, getOrders } from '../controllers/index';

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({ keys: ['my-secret-key'] }));

// View engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
  res.render('home', { products: getProducts() });
});

app.get('/products', (req, res) => {
  res.render('products', { products: getProducts() });
});

app.get('/products/:id', (req, res) => {
  const product = getProductById(req.params.id);
  if (product) {
    res.render('product', { product });
  } else {
    res.status(404).send('Product not found');
  }
});

app.post('/products', createProduct);

app.put('/products/:id', updateProduct);

app.delete('/products/:id', deleteProduct);

app.post('/orders', createOrder);

app.get('/orders', (req, res) => {
  const orders = getOrders(req.session.userId);
  res.render('orders', { orders });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
