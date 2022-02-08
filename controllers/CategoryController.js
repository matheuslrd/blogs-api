const CategoryService = require('../services/CategoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const category = await CategoryService.createCategory(name);

  if (category.message) {
    return res.status(category.code).json({ message: category.message });
  }

  return res.status(201).json(category);
};

module.exports = {
  createCategory,
};