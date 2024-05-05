// models/order.js
import { DataTypes } from 'sequelize';
import db from '../config/database';
import Product from './product';

const Order = db.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: false,
});

Order.associate = (models) => {
  Order.belongsTo(models.User, { foreignKey: 'userId' });
  Order.hasMany(models.OrderItem, { foreignKey: 'orderId' });
};

export default Order;
