const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: { type: String, required: [true, 'Title is required.'] },
  code: { type: String, required: [true, 'A code is required.'] },
  client: { type: String, required: [true, 'A client is required.'] },
  edition: { type: Number, required: false },  
  author: { type: String, required: false },
  notes: { type: String, required: false }
});

module.exports = mongoose.model('Project', ProjectSchema);