const Desk = require('../models/Desk');
const {getAllDesks} = require('../utilities/desk_utilities')

async function newDesk(req, res) {
  const { number, section, available } = req.body;

  try {
    const desk = await Desk.create({ number, section, available });
    console.log("Created Desk:", desk)

    res.redirect("/");
  }
  catch(err){
      console.log(err)
  }
}

const getDesks = function (req, res) {

  getAllDesks().exec((err, desks) => {
      if (err) {
          res.status(500);
          return res.json({
              error: err.message
          });
      }
      res.send(desks);
  });
};

module.exports = {
  newDesk,
  getDesks
};