module.exports = {
  PORT: process.env.PORT,
  PORT_CLIENT: process.env.PORT_CLIENT,
  DB_DEV: process.env.DB_DEV,
  DB: process.env.DB,
  ISDEV: process.env.NODE_ENV === 'development'
}