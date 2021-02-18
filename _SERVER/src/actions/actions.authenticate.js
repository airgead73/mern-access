const asyncHandler = require('../middleware/handleAsync');
const User = require('../models/User');
const jwtDecode = require('jwt-decode');
const { hashPassword, createToken, verifyPassword } = require('../util/authentication');

/**
 * @route   POST /api/authenticate
 * @desc    login user 
 * @access  private
 */

exports.authenticate = asyncHandler(async function(req, res, next) {

  const { email, password } = req.body;

  const user = await User.findOne({email}).lean();

  if(!user) {
    return res
      .status(403)
      .json({
        success: false,
        message: 'Wrong email or password.'
      });
  }

  const passwordValid = await verifyPassword(password, user.password);

  if(passwordValid) {
    const { password, bio, ...rest } = user;
    const userInfo = Object.assign({}, { ...rest });

    const token = createToken(userInfo);
    const decodedToken = jwtDecode(token);
    const expiresAt = decodedToken.exp;

    return res
      .status(200)
      .json({
        success: true,
        message: 'User authenticated.',
        token,
        userInfo,
        expiresAt
      });

  } else {
    return res
      .status(403)
      .json({
        message: 'Wrong email or password.'
      });
  }

});