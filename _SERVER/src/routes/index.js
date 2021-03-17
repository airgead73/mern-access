const { Router } = require('express');
const { projectsRouter } = require('./routes.projects');

const apiRouter = Router();

apiRouter.use('/projects', projectsRouter);

module.exports = {
  apiRouter
}