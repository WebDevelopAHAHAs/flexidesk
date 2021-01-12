//auth

function index(req, res) {
  req.session.views = req.session.views ? req.session.views + 1 : 1;
  res.json(req.session.views);
}

function dashboard(req, res) {
  res.send("Welcome to your dashboard!");
}

module.exports = {
  index,
  dashboard
}