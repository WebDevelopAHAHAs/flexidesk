const Booking = require('../models/Booking');

const getAllBookings = function() {
  return Booking.find();
}

const getBookingByID = function(id) {
	return Booking.findById(id)
}

const deleteBooking = function(id) {
	return Booking.findByIdAndRemove(id)
}

const updateBooking = function (id) {
  req.body.modified_date = Date.now();
  // use new:true to return the updated booking rather than the original booking when the query is executed
  return Booking.findByIdAndUpdate(id, req.body, { new: true } );
    // ,{ new: true } // include if i dont want to return the old document
};

module.exports = { getBookingByID, getAllBookings, deleteBooking, updateBooking};