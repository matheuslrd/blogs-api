const PostsCategories = (sequelize, _DataTypes) => {
  const PostsCategoriesModel = sequelize.define('PostsCategories', {}, {
    timestamps: false,
    tableName: 'PostsCategories' });

  PostsCategoriesModel.associate = (model) => {
    model.BlogPost.belongsToMany(model.Category, {
      through: PostsCategoriesModel,
      foreingKey: 'categoryId',
      as: 'categories',
      otherKey: 'postId',
    });

     model.Category.belongsToMany(model.BlogPost, {
      through: PostsCategoriesModel,
      foreingKey: 'postId',
      as: 'post',
      otherKey: 'categoryId',
    });
  };

  return PostsCategoriesModel;
};

module.exports = PostsCategories;