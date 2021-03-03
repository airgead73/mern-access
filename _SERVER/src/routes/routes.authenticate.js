const { Router } = require('express');
const authenticationRouter = Router();

// models
const User = require('../models/User');

// actions
const {
  authenticate,
  logout
} = require('../actions/actions.authenticate');

// middleware
const { requireAuth } = require('../middleware/handleAuthentication');

// router
authenticationRouter
  .route('/')
  .post(authenticate);

authenticationRouter
  .route('/logout')
  .get(logout);

module.exports = {
  authenticationRouter,
}