const Booking = require('../models/Booking');
const {
  getBookingByID, getAllBookings,
  deleteBooking, updateBooking,
  
  getAllBookingsByDate
} = require('../utilities/booking_utilities')

async function newBooking(req, res) {
  const { user_id, desk_id, date } = req.body;

  try {
    const booking = await Booking.create({ user_id, desk_id, date });
    console.log("Created Booking:", booking)

    res.send(user);
  }
  catch(err){
      console.log(err)
  }
}

const getBookings = function (req, res) {

  getAllBookings().exec((err, bookings) => {
      if (err) {
          res.status(500);
          return res.json({
              error: err.message
          });
      }
      res.send(bookings);
  });
};


const getBooking = function(req, res) {
	getBookingByID(req).exec((err, booking) => {
    if (err) {
        res.status(400);
        return res.send("Booking not found");
    }
    res.send(booking);
  });
}

const changeBooking = function (req, res) {
  if (req.error) {
      res.status(req.error.status);
      res.send(req.error.message);
  } else {
      updateBooking(req).exec((err, booking) => {
          if (err) {
              res.status(500);
              res.json({ error: err });
          }
          res.status(200);
          res.json(booking);
      });
  }
}

const removeBooking = function (req, res) {
    deleteBooking(req).exec((err) => {
        if (err) {
            res.status(500);
            res.json({ error: err });
        }
        res.sendStatus(204);
    });
}

const getBookingsByDate = function (req, res) {

  getAllBookingsByDate(req).exec((err, bookings) => {
      if (err) {
          res.status(500);
          return res.json({
              error: err.message
          });
      }
      res.send(bookings);
  });
};

// const getBookingsByDay = function (req, res) {

//   getAllBookingsByDate(req).exec((err, bookings) => {
//       if (err) {
//           res.status(500);
//           return res.json({
//               error: err.message
//           });
//       }
//       res.send(bookings);
//   });
// };

// const getBookingsByMonth = function (req, res) {

//   getAllBookingsByDate(req).exec((err, bookings) => {
//       if (err) {
//           res.status(500);
//           return res.json({
//               error: err.message
//           });
//       }
//       res.send(bookings);
//   });
// };


// const getBookingsByYear = function (req, res) {

//   getAllBookingsByDate(req).exec((err, bookings) => {
//       if (err) {
//           res.status(500);
//           return res.json({
//               error: err.message
//           });
//       }
//       res.send(bookings);
//   });
// };



module.exports = {
  newBooking,
  getBookings,
  getBooking,
  changeBooking,
  removeBooking,

  getBookingsByDate
};