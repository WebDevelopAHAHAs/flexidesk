const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Booking = new Schema({
    user_id: {
      type: String,
      required: true
    },
    desk_id: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

Booking.plugin(require('mongoose-bcrypt'));
module.exports = mongoose.model('booking', Booking);