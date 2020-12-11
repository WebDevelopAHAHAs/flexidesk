const UserModel = require("../models/user");

// #region Register

function registerNew(req, res) {
    res.render("auth/register");
}

async function registerCreate(req, res) {
    const { email, password } = req.body;
    try{
            const user = await UserModel.create({ email, password });
            req.session.user = user;
            res.redirect("/dashboard");
    }
    catch(err){
        console.log(err)
    }
}

// #endregion

// #region Login

//auth
async function loginNew(req, res) {
  res.render("auth/login");
}
async function loginCreate(req, res) {
  authenticate(req, res, function () {
      res.status(200);
      res.json({user: req.user, sessionID: req.sessionID});
  });
}

async function logout(req, res) {
  req.session.destroy(() => {
      res.redirect("/");
  });
}

module.exports = {
    registerNew,
    registerCreate,

    loginNew,
    loginCreate,

    logout
}