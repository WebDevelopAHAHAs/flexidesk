const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Desk = new Schema({
    number: {
      type: Number,
      required: true
    },
    section: {
      type: text,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    }
});

Desk.plugin(require('mongoose-bcrypt'));
module.exports = mongoose.model('desk', Desk);