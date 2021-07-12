const express = require('express');
const rescue = require('express-rescue');
const servicesController = require('../controllers/servicesCotroller');
const validateForm = require('../middlewares/validateForm');

const router = express.Router();

router.post('/api/services', validateForm, rescue(servicesController.createService));
router.get('/api/services', rescue(servicesController.getAllServices));
router.get('/api/services/:id', rescue(servicesController.getServiceById));
router.put('/api/services/:id', validateForm, rescue(servicesController.updateService));
router.delete('/api/services/:id', rescue(servicesController.deleteService));

module.exports = router;