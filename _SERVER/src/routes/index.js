const { Router } = require('express');
const { usersRouter } = require('./routes.users');
const { projectsRouter } = require('./routes.projects');
const { tokenRouter } = require('./routes.tokens');
const { authenticationRouter } = require('./routes.authenticate');

const apiRouter = Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/projects', projectsRouter);
apiRouter.use('/tokens', tokenRouter);
apiRouter.use('/authenticate', authenticationRouter);

module.exports = {
  apiRouter
}