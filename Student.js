const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  gender: String,
});
module.exports = mongoose.model('Student', studentSchema);
