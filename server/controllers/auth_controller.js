const User = require("../models/user");

// #region Register

// function registerNew(req, res) {
//     res.render("auth/register");
// }

async function register(req, res) {
    const { first_name, email, password } = req.body;
    console.log(req.body)
    try{
            const user = await User.create({ first_name, email, password });
            req.session.user = user;
            res.redirect("/"); //home / dashboard
    }
    catch(err){
        console.log(err)
    }
}

// #endregion

// #region Login / Logout

async function login(req, res) {
  console.log(req.body)

  const { email, password } = req.body;
  console.log(email)
  const user = await User.findOne({email});
  if (!user) {
    console.log("ERROR - user: Invalid email")
    res.redirect("/auth/login");
    // return res.render("authentication/login", { error: "Invalid email & password" });
  }

  const valid = await user.verifyPassword(password);
  if (!valid) {
    console.log("ERROR - validation: Invalid password")
    res.redirect("/auth/login");
    // return res.render("authentication/login", { error: "Invalid email & password" });
  }

  console.log('Logged in', email);
  req.session.user = user;
  res.redirect("/");
}

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