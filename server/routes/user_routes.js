const express = require('express');
const router = express.Router();
const {registerUser, getUsers} = require('../controllers/user_controller');

router.post('/register', registerUser); //database user creation route

router.get('/all', getUsers)

module.exports = router;