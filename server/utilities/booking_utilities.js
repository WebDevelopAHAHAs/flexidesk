const Booking = require('../models/Booking');

const getAllBookings = function() {
  return Booking.find();
}

const getBookingByID = function(req) {
	return Booking.findById(req.params.id)
}

const getAllBookingsByDate = function(req) {
  console.log("Bookings by Date Query: ", req.params.date)
  // const parsedDate = Date.parse(req.params.date)
  // console.log(parsedDate)
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