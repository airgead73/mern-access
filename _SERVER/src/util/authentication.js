const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require('../../../_CONFIG')

const createToken = user => {
  // Sign the JWT
  if (!user.role) {
    throw new Error('No user role specified');
  }
  return jwt.sign(
    {
      sub: user._id,
      email: user.email,
      role: user.role,
      iss: 'api.starter',
      aud: 'api.starter'
    },
    JWT_SECRET,
    { algorithm: 'HS256', expiresIn: '1h' }
  );
};

const hashPassword = async (password) => {

  const salt = await bcrypt.genSalt(12);
  let hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;

}

const verifyPassword = (passwordAttempt, hashedPassword) => {
  return bcrypt.compare(passwordAttempt, hashedPassword)
};

module.exports = {
  hashPassword,
  verifyPassword,
  createToken
}