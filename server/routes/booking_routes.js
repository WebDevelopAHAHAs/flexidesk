const express = require('express');
const router = express.Router();
const {
  newBooking,
  getBookings, getBooking,
  changeBooking, removeBooking
} = require('../controllers/booking_controller');

//Create
router.post('/new', newBooking); //database booking creation route

//Queries
router.get('/all', getBookings)

router.get('/:id', getBooking)

//Edit
router.post('/:id', changeBooking)

//Delete
router.get('/:id/delete', removeBooking)

module.exports = router;