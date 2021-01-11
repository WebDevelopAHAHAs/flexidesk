const User = require('../models/user');
// const {getAllUsers} = require('../utilities/user_utilities')

//Register / Does not Sign In
async function registerUser(req, res) {
  const { first_name, email, password } = req.body;
  
  try {
    const user = await User.create({ first_name, email, password });
    console.log("Created User:", user)

    res.redirect("/");
  }
  catch(err){
      console.log(err)
  }
}

const getUsers = function (req, res) {
  // execute the query from getAllPosts
  User.find().exec((err, users) => {
      if (err) {
          res.status(500);
          return res.json({
              error: err.message
          });
      }
      res.send(users);
  });
};

const getUserByID = function(req) {
	return User.findById(req.params.id)
}

const getUsersByName = function(req) {
	return User.find(User.first_name, req.params.id)
}

const updateUserByID = function(req) {
	// return User.find(User.first_name, req.params.id)
}

const deleteUserByID = function(req) {
	// return User.find(User.first_name, req.params.id)
}


//#region Old
// const removeUser = function (req, res) {
//     deleteUser(req).exec((err) => {
//         if (err) {
//             res.status(500);
//             res.json({
//                 error: err
//             });
//         }
//         res.sendStatus(204);
//     });
// }

// const changeUser = function (req, res) {
//     if (req.error) {
//         res.status(req.error.status);
//         res.send(req.error.message);
//     } else {
//         updateUser(req).exec((err, user) => {
//             if (err) {
//                 res.status(500);
//                 res.json({
//                     error: err
//                 });
//             }
//             res.status(200);
//             res.json(user);
//         });
//     }
// }

// // middleware function
// async function checkRequiresAdmin(req, res, next) {
//     // If block value is passed in body, make sure it can be updated
//     if (req.body.blocked) {
//         await User.findById(req.params.id).exec((err, user) => {
//             if (err) {
//                 req.error = {
//                     message: err.message,
//                     status: 500
//                 };
//                 next();
//             }
//             // if user.blocked isn't set, we only care if we have admin user if blocked is being set to true
//             // if user.blocked is set, we want to make sure user is admin if it is being changed
//             if ((user.blocked && user.blocked.toString() != req.body.blocked) ||
//                 !user.blocked && req.body.blocked == "true") {
//                 if (req.user.role !== 'admin') {
//                     // Trying to block/unblock user and not admin
//                     req.error = {
//                         message: 'Only admin can block/unblock a user',
//                         status: 403
//                     };
//                 }
//             }
//             next();
//         });
//     }
// }
//#endregion

module.exports = {  
  registerUser,
  getUsers,
  getUserByID,
  getUsersByName,
  updateUserByID,
  deleteUserByID
  //,
  // removeUser,
  // changeUser,
  // checkRequiresAdmin
};