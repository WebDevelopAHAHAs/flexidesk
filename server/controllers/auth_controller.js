const User = require("../models/user");

//Register / Does not Sign In
async function register(req, res) {
    const { first_name, email, password } = req.body;
    
    try {
      const user = await User.create({ first_name, email, password });
      console.log("Created User:", user)
      
      //Delete the bottom eventually when admins can create
      req.session.user = user;
      console.log('Logged on as', user.email);

      res.redirect("/"); //home / dashboard
    }
    catch(err){
        console.log(err)
    }
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


// #endregion

module.exports = {
    // registerNew,

    register,
    login,

    // loginNew,
    // login: loginUser,

    logout
}