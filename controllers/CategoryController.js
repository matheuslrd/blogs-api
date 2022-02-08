const CategoryService = require('../services/CategoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const category = await CategoryService.createCategory(name);

  if (category.message) {
    return res.status(category.code).json({ message: category.message });
  }

  return res.status(201).json(category);
};

const showAllCategories = async (_req, res) => {
  const categories = await CategoryService.showAllCategories();

  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  showAllCategories,
};