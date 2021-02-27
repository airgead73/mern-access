const express = require('express');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const session = require('express-session');
const policies = require('../_CONFIG/csp');
const { SESSION_SECRET, SESSION_AGE } = require('../_CONFIG/constants');

/**
 * INTIALIZE APP
 */

const app = express();
const { connectDB } = require('../_CONFIG');
connectDB();

/**
 * SECURITY
 */

app.use(cors());
app.use(helmet());
app.use(helmet.contentSecurityPolicy(policies));

/**
 * MIDDLEWARE
 */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './../_PUBLIC')));
app.use(session({
  secret: SESSION_SECRET,
  saveUninitialized: true,
  resave: true,
  cookie: {
    httpOnly: true,
    maxAge: parseInt(SESSION_AGE)
  }
}));

app.use((req, res, next) => {

  console.log(req.session);
  next()

});

/**
 * DEV MIDDLEWARE
 */



/**
 * AUTHENTICATION
 */



/**
 * LOAD ROUTES
 */

 const { apiRouter } = require('./src/routes/index');
 app.use('/api', apiRouter);


/**
 * ERROR HANDLING
 */



/**
 * EXPORT
 */
 
module.exports = app;