const BlogPost = (sequelize, DataTypes) => {
  const BlogPostModel = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    timestamps: false,
  });

  BlogPostModel.associate = (models) => {
    BlogPostModel.belongsTo(models.User, { foreingKey: 'userId', as: 'user' });
  };

  return BlogPostModel;
};

module.exports = BlogPost;