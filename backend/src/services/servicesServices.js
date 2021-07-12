const servicesModel = require('../models/servicesModel');
const { ObjectId } = require('mongodb');

const createService = async (name, value) => {
  const service = await servicesModel.createService(name, value);
  return service;
};

const getAllServices = async () => {
  const services = await servicesModel.getAllServices();
  return services;
};

const getServiceById = async (id) => {
  if (!ObjectId.isValid(id)) throw new Error('Wrong id format');
  const service = await servicesModel.getServiceById(id);
  return service;
};

const updateService = async (id, name, value) => {
  if (!ObjectId.isValid(id)) throw new Error('Wrong id format');
  const newService = await servicesModel.updateService(id, name, value);
  return newService;
};

const deleteService = async (id) => {
  if (!ObjectId.isValid(id)) throw new Error('Wrong id format');
  const getService = await getServiceById(id);
  if (!getService) throw new Error('service already not exists');
  await servicesModel.deleteService(id);
  return getService;
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
}