const User = require('../models/User');
const {
  getUserByID, getAllUsers,
  deleteUser, updateUser
} = require('../utilities/user_utilities')

const test = function(req, res) {
  console.log("Hit!");
}

//Register / Does not Sign In
async function newUser(req, res) {
  const { access, first_name, last_name, contact_number, email, password } = req.body;

  try {
    const user = await User.create({ access, first_name, last_name, contact_number, email, password });
    console.log("Created User:", user)

    res.redirect("/");
  }
  catch(err){
      console.log(err)
  }
}


const getUsers = function (req, res) {

  getAllUsers().exec((err, users) => {
      if (err) {
          res.status(500);
          return res.json({
              error: err.message
          });
      }
      res.send(users);
  });
};

const getUser = function(req, res) {
  console.log("Hit!")
	getUserByID(req).exec((err, user) => {
    if (err) {
        res.status(400);
        return res.send("User not found");
    }
    res.send(user);
  });
}

const changeUser = function (req, res) {
  if (req.error) {
      res.status(req.error.status);
      res.send(req.error.message);
  } else {
      updateUser(req).exec((err, user) => {
          if (err) {
              res.status(500);
              res.json({ error: err });
          }
          res.status(200);
          res.json(user);
      });
  }
}

const removeUser = function (req, res) {
    deleteUser(req).exec((err) => {
        if (err) {
            res.status(500);
            res.json({ error: err });
        }
        res.sendStatus(204);
    });
}

module.exports = {  
  newUser,
  getUser,
  getUsers,
  removeUser,
  changeUser,
  test
};