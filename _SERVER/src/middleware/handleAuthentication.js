const jwt = require('express-jwt');
const jwtDecode = require('jwt-decode');
const { JWT_SECRET } = require('../../../_CONFIG/constants')

exports.checkJwt = jwt({
  secret: JWT_SECRET,
  audience: 'api.starter',
  issuer: 'api.starter',
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