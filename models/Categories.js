const Categories = (sequelize, DataTypes) => {
  const CategoryModel = sequelize.define('Category', {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Categories',
  });

  return CategoryModel;
};

module.exports = Categories;