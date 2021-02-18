const { Router } = require('express');
const usersRouter = Router();

// models
const User = require('../models/User');

// actions
const {
  create,
  read,
  read_one,
  update,
  delete_one,
  delete_all
} = require('../actions/actions.users');

// router
usersRouter
  .route('/')
  .get(read)
  .post(create)
  .delete(delete_all);

usersRouter
  .route('/:userID')
  .get(read_one)
  .put(update)
  .delete(delete_one);

module.exports = {
  usersRouter,
}