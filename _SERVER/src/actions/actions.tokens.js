const asyncHandler = require('../middleware/handleAsync');
const Token = require('../models/Token');
const User = require('../models/User');
const { createToken } = require('../util/authentication');

/**
 * @route   GET /api/tokens/refresh
 * @desc    refresh token
 * @access  private
 */

exports.refresh = asyncHandler(async function(req, res, next) {

  const { refreshToken } = req.cookies;
  
  if(!refreshToken) {
    return res.status(401).json({success: false, message: 'Not authorized'})
  }

  const userFromToken = await Token.findOne({
   refreshToken
  }).select('user');

  if(!userFromToken) {
    return res.status(401).json({success: false, message: 'Not authorized'})
  }

  const user = await User.findOne({
    _id: userFromToken.user
  })

  if(!user) {
    return res.status(401).json({success: false, message: 'Not authorized'})
  }

  const token = createToken(user);
  
  return res
    .status(200)
    .json({
      token
    });

});