const connection = require('../config/connection');
const { ObjectId } = require('mongodb');

const createOrder = async (products) => {
  const order = await connection()
    .then((db) => db.collection('orders')
      .insertOne({ products: products }))
    .then(result => result.ops[0]);
  return {
    _id: order._id,
    products: products
  };
};

const getAllOrders = async () => {
  const allOrders = await connection().then((db) =>
    db.collection('orders').find().toArray());
  return allOrders;
};

const  getOrdersById = async (id) => {
  const order = await connection()
    .then((db) =>  db.collection('orders').findOne(ObjectId(id)));
  return order;
};
  
const updateOrder =async (id, products) => {
  const order = await connection()
    .then((db) => db.collection('orders')
      .updateOne(
        { _id: ObjectId(id) },
        {$set: { products }}))
    .then(() => ({ _id: id, products }));

  return order;
};

const deleteOrder = async (id) => {
  const order = await connection().then((db) =>
    db.collection('orders').deleteOne({ _id: ObjectId(id) })
  );
  return order;
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrdersById,
  updateOrder,
  deleteOrder,
}