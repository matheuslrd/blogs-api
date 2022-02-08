const BlogPost = (sequelize, DataTypes) => {
  const BlogPostModel = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    categoryIds: DataTypes.ARRAY(DataTypes.INTEGER),
  });

  return BlogPostModel;
};

module.exports = BlogPost;