const express = require('express');
const router = express.Router();
// const { authRedirect } = require("../middleware/auth_middleware");
const { login, logout } = require('../controllers/auth_controller');

// Register
// router.get('/register', authRedirect, registerNew); //handled in react

//#region Login
router.post('/login', login) // create user session
router.get('/logout', logout); // delete user session

module.exports = router;