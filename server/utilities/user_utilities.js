const User = require('../models/User');

const getAllUsers = function(req) {
  return User.find();
}

const getUserByID = function(id) {
	return User.findById(id)
}

const deleteUser = function(id) {
	return User.findByIdAndRemove(id)
}

const updateUser = function (req) {
  req.body.modified_date = Date.now();
  // use new:true to return the updated post rather than the original post when the query is executed
  return User.findByIdAndUpdate(req.params.id, req.body); // ,{ new: true } 
    // include if i dont want to return the document
};

module.exports = { getUserByID, getAllUsers, deleteUser, updateUser};