const Desk = require('../models/desk');
const {getAllEntries} = require('../utilities/crud_utilities')

async function newDesk(req, res) {
  const { number, section, active } = req.body;

  try {
    const desk = await Desk.create({ number, section, active });
    console.log("Created Desk:", desk)

    res.redirect("/");
  }
  catch(err){
      console.log(err)
  }
}

const getDesks = function (req, res) {

  getAllEntries(req).exec((err, desks) => {
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