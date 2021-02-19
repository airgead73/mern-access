module.exports = {
  PORT: process.env.PORT,
  DB_DEV: process.env.DB_DEV,
  DB: process.env.DB,
  ISDEV: process.env.NODE_ENV === 'development',
  JWT_SECRET: process.env.JWT_SECRET
}