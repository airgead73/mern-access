module.exports = {
  PORT_SERVER: process.env.PORT_SERVER,
  PORT_CLIENT: process.env.PORT_CLIENT,
  DB_DEV: process.env.DB_DEV,
  DB: process.env.DB,
  ISDEV: process.env.NODE_ENV === 'development',
  JWT_SECRET: process.env.JWT_SECRET
}