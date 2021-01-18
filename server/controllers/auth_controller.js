const User = require("../models/User");

async function getSession(req, res) {
  console.log("Retrieving User", req.session.user)
  res.send(req.session.user)
}

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
  console.log(req.session.user)
  res.send(req.session.user);
}

//Logout
const logout = function (req, res) {
  console.log('Logged out.');
  // console.log('session object:', req.session);

  req.session.destroy(() => {
    res.send(req.session);
  });

  res.sendStatus(200);
}

// middleware function


module.exports = {
  getSession,
  login,
  logout
}