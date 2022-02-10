const PostsCategories = (sequelize, _DataTypes) => {
  const PostsCategoriesModel = sequelize.define('PostsCategories', {}, {
    timestamps: false,
    tableName: 'PostsCategories' });

  PostsCategoriesModel.associate = (model) => {
    model.BlogPost.belongsToMany(model.Category, {
      as: 'categories',
      through: PostsCategoriesModel,
      foreingKey: 'categoryId',
      otherKey: 'postId',
    });

     model.Category.belongsToMany(model.BlogPost, {
      as: 'BlogPosts',
      through: PostsCategoriesModel,
      foreingKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return PostsCategoriesModel;
};

module.exports = PostsCategories;