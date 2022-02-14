const jwt = require('jsonwebtoken');
const Joi = require('joi');

const { BlogPost, User, Category } = require('../models');

const createPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

const verifyIfCategoriesExist = async (categoriesList) => {
  const checkCategory = await Category.findAll({ where: { id: categoriesList } });
  
  return checkCategory;
};

const getUserWithJWT = async (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findOne({ where: { email: decoded.data.email } });

  return user;
};

const createPost = async (title, content, categoryIds, token) => {
  const { id: userId } = await getUserWithJWT(token);

  const { error } = createPostSchema.validate({ title, content, categoryIds });
  if (error) return { code: 400, message: error.message };

  const checkCategories = await verifyIfCategoriesExist(categoryIds);
  if (checkCategories.length !== categoryIds.length) {
    return { code: 400, message: '"categoryIds" not found' };
  }

  const post = await BlogPost.create({ userId, title, content });
  
  return post;
};
/* 
const serialize = async (post) => {
  const user = await User.findOne({ where: { id: post.id } });

  return { ...post, user };
}; */

const showAllPosts = async () => {
  const posts = await BlogPost.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ], 
  });

  return posts;
};

module.exports = {
  createPost,
  showAllPosts,
};