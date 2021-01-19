const Booking = require('../models/Booking');

const getAllBookings = function() {
  return Booking.find();
}

const getBookingByID = function(req) {
	return Booking.findById(req.params.id)
}

const getAllBookingsByUser = function(req) {
  console.log("Bookings by User Query: ", req.params.user_id)
	return Booking.find({user_id: req.params.user_id})
}

const getAllBookingsByUserDate = function(req) {
  console.log("Bookings by User & Date Query: ", req.params.user_id, req.params.date)
	return Booking.find({user_id: req.params.user_id, date: req.params.date})
}

const getAllBookingsByDate = function(req) {
  console.log("Bookings by Date Query: ", req.params.date)
	return Booking.find({date: req.params.date})
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

module.exports = {
  getBookingByID, getAllBookings,
  deleteBooking, updateBooking,
  getAllBookingsByDate
};