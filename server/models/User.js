const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  access: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  contact_number: {
    type: Number,
    required: true
  },
  email: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true
  }
});

User.plugin(require('mongoose-bcrypt'));
module.exports = mongoose.model('user', User);