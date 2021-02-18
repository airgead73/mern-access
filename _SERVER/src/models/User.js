const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: [true, 'First name is required.'] },
  lastName: { type: String, required: [true, 'Last name is required.'] },
  email: { type: String, required: [true, 'Properly formatted email is required.'] },
  password: { type: String, required: [true, 'Password is required.'] },
  role: { type: String, required: [true, 'Role is required.'], default: 'user' },
  bio: { type: String, required: false }
});

module.exports = mongoose.model('User', UserSchema);