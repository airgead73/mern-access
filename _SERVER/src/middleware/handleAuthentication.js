const jwt = require('express-jwt');
const jwtDecode = require('jwt-decode');
const { JWT_SECRET } = require('../../../_CONFIG/constants')

// exports.requireAuth = jwt({
//   secret: JWT_SECRET,
//   algorithms: ['HS256'],
//   audience: 'api.starter',
//   issuer: 'api.starter',
//   //getToken: req => req.cookies.token
// });
exports.requireAuth = (req, res, next) => {
  const { user } = req.session;
  if(!user) {
    return res
      .status(401)
      .json({
        success: false,
        message: "Unauthorized"
      });
  }
  next();
}



exports.requireAdmin = (req, res, next) => {
  const { user } = req.session;
  if(!user.role !== 'admin') {
    return res
      .status(401)
      .json({ 
        success: false,
        message: 'Insufficient Role'
      });
  }
  next();
};
