const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    first_name: {
      type: String,
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