const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

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
