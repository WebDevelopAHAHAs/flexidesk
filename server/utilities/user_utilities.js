const User = require('../models/user');

// const createUser = () => {

// }

const getAllUsers = function(req) {
  return User.find();
}

const getUserByID = function(id) {
	return User.findById(id)
}

const deleteUser = function(id) {
	return Post.findByIdAndRemove(id)
}

const updateUser = function (id) {
  req.body.modified_date = Date.now();
  // use new:true to return the updated post rather than the original post when the query is executed
  return User.findByIdAndUpdate(id, req.body
    // ,{ new: true } // include if i dont want to return the document
  );
};

module.exports = { getUserByID, getAllUsers, deleteUser, updateUser};

// export default utilities;