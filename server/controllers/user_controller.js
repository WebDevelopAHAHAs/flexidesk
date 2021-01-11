const User = require('../models/user');
const {getUserByID, getAllUsers, deleteUser,updateUser}
= require('../utilities/user_utilities')

//Register / Does not Sign In
async function newUser(req, res) {
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

const getUser = function(req, res) {
	getUserByID(req.params.id).exec((err, post) => {
    if (err) {
        res.status(400);
        return res.send("Post not found");
    }
    res.send(post);
});
}

const getUsers = function(req) {
	return User.find()
}
// const getUsers = function (req, res) {
//   // execute the query from getAllPosts
//   getAllUsers().exec((err, users) => {
//       if (err) {
//           res.status(500);
//           return res.json({
//               error: err.message
//           });
//       }
//       res.send(users);
//   });
// };

const removeUser = function (req, res) {
    deleteUser(req.params.id).exec((err) => {
        if (err) {
            res.status(500);
            res.json({
                error: err
            });
        }
        res.sendStatus(204);
    });
}

const changeUser = function (req, res) {
    if (req.error) {
        res.status(req.error.status);
        res.send(req.error.message);
    } else {
        updateUser(req.params.id).exec((err, user) => {
            if (err) {
                res.status(500);
                res.json({
                    error: err
                });
            }
            res.status(200);
            res.json(user);
        });
    }
}

module.exports = {  
  newUser,
  getUser,
  getUsers,
  removeUser,
  changeUser
};