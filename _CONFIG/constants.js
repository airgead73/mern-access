module.exports = {
  PORT: process.env.PORT,
  DB_DEV: process.env.MONGO_URI_DEV,
  DB: process.env.MONGO_URI,
  ISDEV: process.env.NODE_ENV === 'development',
  JWT_SECRET: process.env.JWT_SECRET
}