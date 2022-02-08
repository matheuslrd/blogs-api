require('dotenv').config();
const UserService = require('../services/UserService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = await UserService.createUser(displayName, email, password, image);

  if (user.message) return res.status(user.code).json({ message: user.message });

  return res.status(201).json(user);
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const login = await UserService.userLogin(email, password);

  if (login.message) return res.status(login.code).json({ message: login.message });

  return res.status(login.code).json({ token: login.token });
};

const showUsers = async (_req, res) => {
  const { authorization } = req.headers;

  const users = await UserService.showUsers();

  return res.status(200).json(users);
};

module.exports = {
  createUser,
  userLogin,
  showUsers,
};