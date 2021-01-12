const express = require('express');
const router = express.Router();
const { newDesk, getDesks } = require('../controllers/user_controller');

//Create
router.post('/new', newDesk); //database user creation route

//Queries
router.get('/all', getDesks)

module.exports = router;