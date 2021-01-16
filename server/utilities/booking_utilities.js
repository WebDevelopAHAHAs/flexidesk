const Booking = require('../models/Booking');

const getAllBookings = function() {
  return Booking.find();
}

const getBookingByID = function(req) {
	return Booking.findById(req.params.id)
}

const deleteBooking = function(req) {
	return Booking.findByIdAndRemove(req.params.id)
}

const updateBooking = function (req) {
  req.body.modified_date = Date.now();
  // use new:true to return the updated booking rather than the original booking when the query is executed
  return Booking.findByIdAndUpdate(req.params.id, req.body, { new: true } );
    // ,{ new: true } // include if i dont want to return the old document
};

module.exports = { getBookingByID, getAllBookings, deleteBooking, updateBooking};