const { Router } = require('express');
const authenticationRouter = Router();

// models
const User = require('../models/User');

// actions
const {
  authenticate,
  logout,
  user_info
} = require('../actions/actions.authenticate');

// middleware
const { requireAuth } = require('../middleware/handleAuthentication');

// router
authenticationRouter
  .route('/')
  .post(authenticate);

authenticationRouter
  .route('/logout')
  .delete(requireAuth, logout);

authenticationRouter
  .route('/user-info')
  .get(user_info);

module.exports = {
  authenticationRouter,
}