const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const helmet = require('helmet');
const handleError = require('./src/middleware/handleError')
const policies = require('../_CONFIG/csp');

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
app.use(cookieParser());

app.use((req, res, next) => {

  console.log('headers:', req.headers);
  next();

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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  handleError(err, req, res, next)

});

/**
 * EXPORT
 */
 
module.exports = app;