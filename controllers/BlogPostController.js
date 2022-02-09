const BlogPostService = require('../services/BlogPostService');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const token = req.headers.authorization;

  const post = await BlogPostService.createPost(title, content, categoryIds, token);

  if (post.message) return res.status(post.code).json({ message: post.message });

  return res.status(201).json(post);
};

module.exports = {
  createPost,
};