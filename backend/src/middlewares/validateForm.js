const validateForm = async (req, res, next) => {
  const { name, value } = req.body;
  try {
    if (typeof name !== 'string' || !name
      || typeof value !== 'number' || !value || value <= 0
    ) throw new Error('Invalid entries. Try again.');
    next();
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = validateForm;