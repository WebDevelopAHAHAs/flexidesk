const express = require('express');
const router = express.Router();
const {
  newBooking,
  getBookings, getBooking,
  changeBooking, removeBooking,
  getUserBookings
  // , getUserBookingsByDate,
  // getBookingsByDate
} = require('../controllers/booking_controller');

//Create
router.post('/new', newBooking); //database booking creation route

//Queries
router.get('/all', getBookings)

router.get('/user/:id', getUserBookings)

// router.get('/userDate/:id/:date', getUserBookingsByDate)

// //Queries
// router.get('/year/:year', getBookingsByYear)
// router.get('/month/:month', getBookingsByMonth)
// router.get('/day/:day', getBookingsByDate)

router.get('/:id', getBooking)

//Edit
router.post('/:id', changeBooking)

//Delete
router.get('/:id/delete', removeBooking)

module.exports = router;