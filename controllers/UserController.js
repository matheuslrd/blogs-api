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
  const users = await UserService.showUsers();

  return res.status(200).json(users);
};

const showUserById = async (req, res) => {
  let { id } = req.params;
  id = Number(id);

  const user = await UserService.showUserById(id);
  console.log(user);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(user);
};

module.exports = {
  createUser,
  userLogin,
  showUsers,
  showUserById,
};