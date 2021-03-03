const asyncHandler = require('../middleware/handleAsync');
const User = require('../models/User');
const jwtDecode = require('jwt-decode');
const { hashPassword, createToken, getRefreshToken, saveRefreshToken } = require('../util/authentication');

/**
 * @route   POST /api/users
 * @desc    create 
 * @access  private
 */

exports.create = asyncHandler(async function(req, res, next) {
  const { email, firstName, lastName, role } = req.body;

  // check if email exists
  const existingEmail = await User.findOne({ email }).lean();

  if(existingEmail) {
    return res
      .status(400)
      .json({
        success: false,
        message: 'Email already exists.'
      });
  }

  // hash password
  const password = await hashPassword(req.body.password);

  const userData = {
    email: email.toLowerCase(),
    firstName,
    lastName,
    password,
    role
  }

  const newUser = new User(userData);
  const savedUser = await newUser.save();

  if(savedUser) {

    const token = createToken(savedUser);
    const decodedToken = jwtDecode(token);
    const expiresAt = decodedToken.exp;

    const {
      _id,
      firstName,
      lastName,
      email,
      role
    } = savedUser;

    const userInfo = {
      _id,
      firstName,
      lastName,
      email,
      role
    }

    const refreshToken = getRefreshToken();
  
    await saveRefreshToken(refreshToken, userInfo._id);

    return res
      .cookie('refreshToken', refreshToken, {
        httpOnly: true
      })
      .status(200)
      .json({
        success: true,
        message: `New user ${savedUser.firstName} ${savedUser.lastName} created.`,
        token,
        userInfo,
        expiresAt
      });
    
  } else {
    return res
    .status(400)
    .json({
      success: false,
      message: 'There was problem creating this account.'
    });
  }
});

/**
 * @route   GET /api/users
 * @desc    read 
 * @access  private
 */

exports.read = asyncHandler(async function(req, res, next) {
  
  const { success, count, data } = res.results;

  return res
    .status(200)
    .json({
      success,
      message: 'Users found',
      count,
      results: data
    });
});

/**
 * @route   GET /api/users/:userID
 * @desc    read one 
 * @access  private
 */

exports.read_one = asyncHandler(async function(req, res, next) {
  const user = await User.findById(req.params.userID);

  return res
    .status(200)
    .json({
      success: true,
      message: 'User found',
      results: user
    });
});

/**
 * @route   PUT /api/users/:userID
 * @desc    update user 
 * @access  private
 */

exports.update = asyncHandler(async function(req, res, next) {
  res.send('Update user');
});

/**
 * @route   DELETE /
 * @desc    delete user 
 * @access  private
 */

exports.delete_one = asyncHandler(async function(req, res, next) {
  res.send('Delete user');
});

/**
 * @route   DELETE /
 * @desc    delete all users 
 * @access  private
 */

exports.delete_all = asyncHandler(async function(req, res, next) {
  res.send('Delete all users');
});
