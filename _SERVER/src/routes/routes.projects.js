const { Router } = require('express');
const projectsRouter = Router();

// models
const Project = require('../models/Project');

// actions
const {
  create,
  read,
  read_one,
  update,
  delete_one,
  delete_all
} = require('../actions/actions.projects');

// middleware 
//const { requireAuth } = require('../middleware/handleAuthentication');

//projectsRouter.use(requireAuth);

// router
projectsRouter
  .route('/')
  .get(read)
  .post(create)
  .delete(delete_all);

projectsRouter
  .route('/:projectID')
  .get(read_one)
  .put(update)
  .delete(delete_one);

module.exports = {
  projectsRouter,
}