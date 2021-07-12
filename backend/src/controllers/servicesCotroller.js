const servicesServices = require('../services/servicesServices');

const createService = async (req, res) => {
  try {
    const { name, value } = req.body;
    const newService = await servicesServices.createService(name, value);
    res.status(201).json(newService);
  } catch (error) {
    if (error.message === 'Invalid entries. Try again.') {
      res.status(400).json(error.message);
    }
    res.status(500).json(error.message);
  }
};

const getAllServices = async (_req, res) => {
  try {
    const services = await servicesServices.getAllServices();
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await servicesServices.getServiceById(id);
    return res.status(200).json(service);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const updateService = async (req, res) => {
  
  try {
    const { id } = req.params;
    const { name, value } = req.body;
    const service = await servicesServices.updateService(id, name, value);
    return res.status(200).json(service);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const deleteService = async (req, res) => {
  console.log('delete', req.params)
  try {
    const { id } = req.params;
    const service = await servicesServices.deleteService(id);
    res.status(204).json(service);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};