// models/product.js
import { db } from '../config/database';

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  static async findAll() {
    const products = await db.query('SELECT * FROM products');
    return products.map((product) => new Product(product.id, product.name, product.price));
  }

  static async findById(id) {
    const product = await db.query(`SELECT * FROM products WHERE id = ${id}`);
    return product? new Product(product.id, product.name, product.price) : null;
  }

  async save() {
    await db.query(`INSERT INTO products (name, price) VALUES ('${this.name}', ${this.price})`);
  }
}

export { Product };
