const express = require('express');
const router = express.Router();
const {
  newUser,
  getUsers, getUser,
  changeUser, removeUser
} = require('../controllers/user_controller');

//Create
router.post('/new', newUser); //database user creation route

//Queries
router.get('/all', getUsers)

router.get('/:id', getUser)

//Edit
router.post('/:id', changeUser)

//Delete
router.get('/:id/delete', removeUser)

module.exports = router;