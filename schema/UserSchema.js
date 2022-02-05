const errors = {
  displayNameLength: '"displayName" length must be at least 8 characters long',
  emailNotExists: '"email" is required',
  validEmail: '"email" must be a valid email',
};

const isLengthLetterThan = (value, min) => (value.length < min);
const validateEmailMask = (email) => {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  if (regex.test(email)) return true;

  return false;
};
const validateIfExists = (value) => (!value);

const validate = (displayName, email, _password, _image) => {
  const code = 400;

  switch (true) {
    case isLengthLetterThan(displayName, 8):
      return { code, message: errors.displayNameLength };
    case validateIfExists(email):
      return { code, message: errors.emailNotExists };
    case !validateEmailMask(email):
      return { code, message: errors.validEmail };
    default:
      return {};
  }
};

module.exports = { validate };