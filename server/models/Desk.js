const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Desk = new Schema({
    number: {
      type: Number,
      required: true
    },
    section: {
      type: String,
      required: true
    },
    available: {
      type: Boolean,
      required: true
    }
});

Desk.plugin(require('mongoose-bcrypt'));
module.exports = mongoose.model('desk', Desk);