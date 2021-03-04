const asyncHandler = require('../middleware/handleAsync');
const User = require('../models/User');
const jwtDecode = require('jwt-decode');
const { createToken, verifyPassword } = require('../util/authentication');

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
    const { password, ...rest } = user;
    const userInfo = Object.assign({}, { ...rest });

    const token = createToken(userInfo);
    const decodedToken = jwtDecode(token);
    const expiresAt = decodedToken.exp;

    req.session.user = userInfo;

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

/**
 * @route   GET /api/authenticate/user-info
 * @desc    get user info
 * @access  private
 */

exports.user_info = asyncHandler(async function(req, res, next) {

  const { user } = req.session;

  if(!user) {
    return res
      .status(401)
      .json({
        success: false,
        message: "Unauthorized"
      });
  }

  setTimeout(() => {
    return res
    .status(200)
    .json({
      success: true,
      user
    });
  }, 1000)




});

/**
 * @route   GET /api/authenticate/logout
 * @desc    logout user 
 * @access  private
 */

exports.logout = asyncHandler(async function(req, res, next) {

  req.session.destroy(err => {
    if(err) {
      return res
        .status(400)
        .json({
          success: false,
          message: 'There was a problem logging out'
        });
    }
    return res
      .status(200)
      .json({
        success: true,
        message: 'Successfully logged out'
      });
  });

});