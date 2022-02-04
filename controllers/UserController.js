const { User } = require('../models');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = await User.create({ displayName, email, password, image });

  return res.status(200).json(user);
};

module.exports = {
  createUser,
};