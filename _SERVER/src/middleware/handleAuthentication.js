const jwt = require('express-jwt');
const jwtDecode = require('jwt-decode');
const { JWT_SECRET } = require('../../../_CONFIG/constants')

exports.requireAuth = jwt({
  secret: JWT_SECRET,
  algorithms: ['HS256'],
  audience: 'api.starter',
  issuer: 'api.starter',
  //getToken: req => req.cookies.token
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
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ message: 'Authentication invalid' });
  }
  const decodedToken = jwtDecode(token);

  if (!decodedToken) {
    return res.status(401).json({
      message: 'There was a problem authorizing the request'
    });
  } else {
    req.user = decodedToken;
    next();
  }
};