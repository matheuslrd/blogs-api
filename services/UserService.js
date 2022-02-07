const jwt = require('jsonwebtoken');
const Joi = require('joi');

const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const userScheme = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
  image: Joi.string().required(),
});

const userLoginScheme = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
});

const findUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const createUser = async (displayName, email, password, image) => {
  const { error } = userScheme.validate({ displayName, email, password, image });

  if (error) {
    return { code: 400, message: error.message };
  }

  const findUser = await findUserByEmail(email);

  if (findUser) return { code: 409, message: 'User already registered' };

  const user = await User.create({ displayName, email, password, image });

  return user;
};

const userLogin = async (email, password) => {
  const { error } = userLoginScheme.validate({ email, password });
  
  const userInBD = await findUserByEmail(email);

  if (error) return { code: 400, message: error.message };
  console.log(error);
  if (!userInBD) return { code: 400, message: 'Invalid fields' };

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: { email, password } }, secret, jwtConfig);

  return { code: 200, token };
};

module.exports = {
  createUser,
  userLogin,
};