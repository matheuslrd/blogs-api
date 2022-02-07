const UserService = require('../services/UserService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = await UserService.createUser({ displayName, email, password, image });

  if (user.message) return res.status(user.code).json({ message: user.message });

  return res.status(201).json(user);
};

module.exports = {
  createUser,
};