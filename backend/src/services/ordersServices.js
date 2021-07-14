const ordersModel = require('../models/ordersModel');
const { ObjectId } = require('mongodb');

const createOrder = async (orders) => {
  const order = await ordersModel.createOrder(orders);
  return order;
};

const getAllOrders = async () => {
  const orders = await ordersModel.getAllOrders();
  return orders;
};

const getOrderById = async (id) => {
  if (!ObjectId.isValid(id)) throw new Error('Wrong id format');
  const order = await ordersModel.getOrdersById(id);
  return order;
};

const updateOrder = async (id, products) => {
  if (!ObjectId.isValid(id)) throw new Error('Wrong id format');
  const newOrder = await ordersModel.updateOrder(id, products);
  return newOrder;
};

const deleteOrder = async (id) => {
  if (!ObjectId.isValid(id)) throw new Error('Wrong id format');
  const getOrder = await getOrderById(id);
  if (!getOrder) throw new Error('Order already not exists');
  await ordersModel.deleteOrder(id);
  return getOrder;
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
}