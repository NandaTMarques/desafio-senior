const Joi = require('joi');

const validateForm = (data) =>
  Joi.object({
    nameService: Joi.string().min(3).max(24).required(),
    amountHours: Joi.number().min(1).required(),
    employee: Joi.string().required(),
    taxRate: Joi.number().min(1).required(),
  }).validate(data);

const validateOrderForm = async (req, res, next) => {
  const [data] = req.body;
  const { error } = validateForm(data);
  try {
    if (error) {
      const orderInfoResponse = { code: 400, message: error.details[0].message };
      throw orderInfoResponse;
    }
    next();
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

module.exports =  validateOrderForm;
