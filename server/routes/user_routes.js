const express = require('express');
const router = express.Router();
const { newUser, getUsers, getUser,
  changeUser, removeUser } = require('../controllers/user_controller');

//Create
router.post('/register', newUser); //database user creation route

router.get('/:id', getUser)

//Queries
router.get('/all', getUsers)

//Edit
router.post('/:id', changeUser)

//Delete
router.delete('/:id', removeUser)

module.exports = router;