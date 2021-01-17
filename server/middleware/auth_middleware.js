function authRedirect(req, res, next) {
  if (req.session.user) {
      return res.redirect("/dashboard");
  }

  return next();
}

function authorise(req, res, next) {
  if (req.session.user) {
      return next();
  }

  return res.redirect("/");
}

async function checkRequiresAdmin(req, res, next) {
  // If block value is passed in body, make sure it can be updated
  if (req.body.blocked) {
      await User.findById(req.params.id).exec((err, user) => {
          if (err) {
              req.error = {
                  message: err.message,
                  status: 500
              };
              next();
          }
          // if user.blocked isn't set, we only care if we have admin user if blocked is being set to true
          // if user.blocked is set, we want to make sure user is admin if it is being changed
          if ((user.blocked && user.blocked.toString() != req.body.blocked) ||
              !user.blocked && req.body.blocked == "true") {
              if (req.user.role !== 'admin') {
                  // Trying to block/unblock user and not admin
                  req.error = {
                      message: 'Only admin can block/unblock a user',
                      status: 403
                  };
              }
          }
          next();
      });
  }
}

module.exports = {
  authRedirect,
  authorise
}