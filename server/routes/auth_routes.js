const express = require('express');
const router = express.Router();
const { authRedirect } = require("../middleware/auth_middleware");
const {
  registerNew,
  registerCreate,

  loginNew,
  loginCreate,
  
  logout
} = require('../controllers/auth_controller');

// Register
router.get('/register', authRedirect, registerNew);
router.post('/register', registerCreate);

// Login
router.get('/login', authRedirect, loginNew)
router.post('/login', loginCreate)

router.get('/logout', logout);

module.exports = router;