const express = require('express');
const router = express.Router();
const controller = require('../controllers/user_controller');
// {registerUser, getUsers, getUserByID, getUsersByName, updateUserByID, deleteUserByID} 
//Create
router.post('/register', controller.registerUser); //database user creation route

//Queries
router.get('/all', controller.getUsers)
router.get('/:id', controller.getUserByID)
router.get('/all/first_name', controller.getUsersByName)

//Edit
router.post('/:id', controller.updateUserByID)

//Delete
router.delete('/:id', controller.deleteUserByID)

module.exports = router;