const { Router } = require('express');
const { usersRouter } = require('./routes.users');
const { projectsRouter } = require('./routes.projects');
const { authenticationRouter } = require('./routes.authenticate');

const apiRouter = Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/projects', projectsRouter);
apiRouter.use('/authenticate', authenticationRouter);

module.exports = {
  apiRouter
}