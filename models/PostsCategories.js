const PostsCategories = (sequelize, _DataTypes) => {
  const PostsCategoriesModel = sequelize.define('PostsCategories', {}, {
    timestamps: false,
    tableName: 'PostsCategories' });

  PostsCategoriesModel.associate = (model) => {
    model.BlogPost.belongsToMany(model.Category, {
      as: 'categories',
      through: PostsCategoriesModel,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

     model.Category.belongsToMany(model.BlogPost, {
      as: 'BlogPosts',
      through: PostsCategoriesModel,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategoriesModel;
};

module.exports = PostsCategories;