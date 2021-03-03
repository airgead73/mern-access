const { Router } = require('express');
const tokenRouter = Router();

// actions
const { 
  refresh
} = require('../actions/actions.tokens');

tokenRouter
  .route('/refresh')
  .get(refresh);

module.exports = {
  tokenRouter
}