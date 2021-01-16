const express = require('express');
const router = express.Router();
const { newDesk,
  getDesks, getDesk,
  changeDesk, removeDesk } = require('../controllers/desk_controller');

//Create
router.post('/new', newDesk); //database desk creation route

//Queries
router.get('/all', getDesks)

router.get('/:id', getDesk)

//Edit
router.post('/:id', changeDesk)

//Delete
router.get('/:id/delete', removeDesk)

module.exports = router;