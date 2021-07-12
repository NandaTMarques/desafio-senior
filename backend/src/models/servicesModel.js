const connection = require('../config/connection');
const { ObjectId } = require('mongodb');

const createService = async (name, value) => {
  //console.log(name, value);
  const service = await connection()
    .then((db) => db.collection('services')
      .insertOne({ name, value }))
    .then(result => result.ops[0]);
  return {
    _id: service._id,
    name,
    value,
  };;
};

const getAllServices = async () => {
  const allRecipes = await connection().then((db) =>
    db.collection('services').find().toArray());
  return allRecipes;
};

const  getServiceById = async (id) => {
  const service = await connection()
    .then((db) =>  db.collection('services').findOne(ObjectId(id)));
  return service;
};
  
const updateService =async (id, name, value) => {
  const service = await connection()
    .then((db) => db.collection('services')
      .updateOne(
        { _id: ObjectId(id) },
        {$set: { name, value }}))
    .then(() => ({ _id: id, name, value }));

  return service;
};

const deleteService = async (id) => {
  const service = await connection().then((db) =>
    db.collection('services').deleteOne({ _id: ObjectId(id) })
  );
  return service;
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
}