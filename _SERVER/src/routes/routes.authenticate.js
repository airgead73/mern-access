const { Router } = require('express');
const authenticationRouter = Router();

// models
const User = require('../models/User');

// actions
const {
  authenticate
} = require('../actions/actions.authenticate');

const requireAuth = (req, res, next) => {
  const { user } = req.session;
  if(!user) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  next();
}

const requireAdmin = (req, res, next) => {
  const { user } = req.session;
  if(user.role !== 'admin') {
    return res.status(401).json({ success: false, message: 'Insufficient role' });
  }
  next();
}

// router
authenticationRouter
  .route('/')
  .post(authenticate);

module.exports = {
  authenticationRouter,
}