const jwt = require('express-jwt');
const jwtDecode = require('jwt-decode');
const jwks = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz');
const { JWT_SECRET } = require('../../../_CONFIG/constants')

exports.requireAuth = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: process.env.AUTH0_JWKS_URI
}),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
  algorithms: ['RS256']
});

exports.requireAdmin = (req, res, next) => {
  const { role } = req.user;
  if(!role !== 'admin') {
    return res
      .status(401)
      .json({ 
        success: false,
        message: 'Insufficient Role'
      });
  }
  next();
};

exports.attachUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ message: 'Authentication invalid' });
  }
  const decodedToken = jwtDecode(token.slice(7));

  if (!decodedToken) {
    return res.status(401).json({
      message: 'There was a problem authorizing the request'
    });
  } else {
    req.user = decodedToken;
    next();
  }
};