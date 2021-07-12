
const express = require('express');
const rescue = require('express-rescue');
const ordersController = require('../controllers/ordersController');
const  validateOrderForm = require('../middlewares/validateOrdersForm');

const router = express.Router();

router.post('/api/orders',  validateOrderForm, rescue(ordersController.createOrder));
router.get('/api/orders', rescue(ordersController.getAllOrders));
router.get('/api/orders/:id', rescue(ordersController.getOrderById));
router.put('/api/orders/:id', validateOrderForm, rescue(ordersController.updateOrder));
router.delete('/api/orders/:id', rescue(ordersController.deleteOrder));

module.exports = router;