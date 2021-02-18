const { 
  PORT,
  ISDEV,
  JWT_SECRET
} = require('./constants');

const connectDB = require('./db');


module.exports = {
  PORT,
  ISDEV,
  JWT_SECRET,
  connectDB
}