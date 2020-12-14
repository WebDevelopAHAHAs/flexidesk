const express = require('express');
const router = express.Router();
const { authRedirect } = require("../middleware/auth_middleware");
const { register, login, logout } = require('../controllers/auth_controller');

// Register
// router.get('/register', authRedirect, registerNew); //handled in react

router.post('/register', register); //database user creation route

// Login
router.post('/login', login) // create user session
// router.get('/login', authRedirect, loginNew) //handled in react?

router.get('/logout', logout); // delete user session

module.exports = router;