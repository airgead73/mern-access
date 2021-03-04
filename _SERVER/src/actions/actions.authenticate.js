const asyncHandler = require('../middleware/handleAsync');
const User = require('../models/User');
const jwtDecode = require('jwt-decode');
const { createToken, verifyPassword, getRefreshToken, saveRefreshToken } = require('../util/authentication');

/**
 * @route   POST /api/authenticate
 * @desc    login user 
 * @access  private
 */

exports.authenticate = asyncHandler(async function(req, res, next) {

  const { email, password } = req.body;

  const user = await User.findOne({
    email
  }).lean();

  if (!user) {
    return res.status(403).json({
      message: 'Wrong email or password.'
    });
  }

  const passwordValid = await verifyPassword(
    password,
    user.password
  );

  if (passwordValid) {
    const { password, bio, ...rest } = user;
    const userInfo = Object.assign({}, { ...rest });

    const token = createToken(userInfo);

    const decodedToken = jwtDecode(token);
    const expiresAt = decodedToken.exp;

    res.json({
      message: 'Authentication successful!',
      token,
      userInfo,
      expiresAt
    });
  } else {
    res.status(403).json({
      message: 'Wrong email or password.'
    });
  }

});

/**
 * @route   GET /api/authenticate/logout
 * @desc    logout user 
 * @access  private
 */

exports.logout = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .cookie('')

});