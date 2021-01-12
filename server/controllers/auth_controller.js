const User = require("../models/user");

//Login
async function login(req, res) {
  console.log(req.body)

  const { email, password } = req.body;

  //Find Email
  const user = await User.findOne({email});
  if (!user) {
    console.log("ERROR - user: Invalid email")
    res.redirect("/auth/login");
  }

  //Password Validation
  const valid = await user.verifyPassword(password);
  if (!valid) {
    console.log("ERROR - validation: Invalid password")
    res.redirect("/auth/login");
  }


  console.log('Logged on as', email);
  req.session.user = user;
  res.redirect("/");
}

//Logout
const logout = function (req, res) {
  console.log('Logged out.');
  // console.log('session object:', req.session);

  req.session.destroy(() => {
    res.redirect("/");
  });

  // res.sendStatus(200);
}

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
// #endregion

module.exports = {
    login,
    logout
    //checkRequiresAdmin
}