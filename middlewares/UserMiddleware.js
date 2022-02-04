const UserSchema = require('../schema/UserSchema');

const validateUser = (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  const { message, code } = UserSchema.validate(displayName, email, password, image);

  if (message) return res.status(code).json({ message });

  next();
};

module.exports = validateUser;