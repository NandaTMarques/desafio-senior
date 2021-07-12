const ordersServices = require('../services/ordersServices');

const createOrder = async (req, res) => {
  try {
    const products = req.body;
    const newOrder = await ordersServices.createOrder(products);
    res.status(201).json(newOrder);
  } catch (error) {
    if (error.message === 'Invalid entries. Try again.') {
      res.status(400).json(error.message);
    }
    res.status(500).json(error.message);
  }
};

const getAllOrders = async (_req, res) => {
  try {
    const orders = await ordersServices.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await ordersServices.getOrderById(id);
    return res.status(200).json(order);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const products = req.body;
    const order = await ordersServices.updateOrder(id, products);
    return res.status(200).json(order);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await ordersServices.deleteOrder(id);
    res.status(204).json(order);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};