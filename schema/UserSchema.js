const errors = {
  displayNameLength: '"displayName" length must be at least 8 characters long',
};

const isLengthLetterThan = (value, min) => (value.length < min);

const validate = (displayName, _email, _password, _image) => {
  const code = 400;

  switch (true) {
    case isLengthLetterThan(displayName, 8):
      return { code, message: errors.displayNameLength };  
    default:
      return {};
  }
};

module.exports = { validate };