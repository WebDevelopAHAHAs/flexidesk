const User = require('../models/User');

const getAllUsers = function() {
  return User.find();
}

const getUserByID = function(req) {
	return User.findById(req.params.id)
}

const deleteUser = function(req) {
	return User.findByIdAndRemove(req.params.id)
}

const updateUser = function (req) {
  // console.log("Editing User: ", req.params.id)
  req.body.modified_date = Date.now();
  // use new:true to return the updated post rather than the original post when the query is executed
  return User.findByIdAndUpdate(req.params.id, req.body); // ,{ new: true } 
    // include if i dont want to return the document
};

module.exports = { getUserByID, getAllUsers, deleteUser, updateUser};