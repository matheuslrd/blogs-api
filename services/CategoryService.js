const Joi = require('joi');

const { Category } = require('../models');

const createCategorySchema = Joi.object({
  name: Joi.string().required(),
});

const createCategory = async (name) => {
  const { error } = createCategorySchema.validate({ name });

  if (error) return { code: 400, message: error.message };

  const category = await Category.create({ name });

  return category;
};

module.exports = {
  createCategory,
};
