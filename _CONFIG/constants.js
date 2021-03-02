module.exports = {
  PORT: process.env.PORT,
  PORT_CLIENT: process.env.PORT_CLIENT,
  DB_DEV: process.env.DB_DEV,
  DB: process.env.DB,
  ISDEV: process.env.NODE_ENV === 'development',
  JWT_SECRET: process.env.JWT_SECRET,
  SESSION_SECRET: process.env.SESSION_SECRET,
  SESSION_AGE: 3600000
}