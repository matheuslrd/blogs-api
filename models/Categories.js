const Categories = (sequelize, DataTypes) => {
  const CategoryModel = sequelize.define('Category', {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return CategoryModel;
};

module.exports = Categories;