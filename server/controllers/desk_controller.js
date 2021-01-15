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


const getDesk = function(req, res) {
  console.log("Hit!")
	getDeskByID(req).exec((err, desk) => {
    if (err) {
        res.status(400);
        return res.send("Desk not found");
    }
    res.send(desk);
  });
}

const changeDesk = function (req, res) {
  if (req.error) {
      res.status(req.error.status);
      res.send(req.error.message);
  } else {
      updateDesk(req).exec((err, desk) => {
          if (err) {
              res.status(500);
              res.json({ error: err });
          }
          res.status(200);
          res.json(desk);
      });
  }
}

const removeDesk = function (req, res) {
    deleteDesk(req).exec((err) => {
        if (err) {
            res.status(500);
            res.json({ error: err });
        }
        res.sendStatus(204);
    });
}


module.exports = {
  newDesk,
  getDesks,
  getDesk,
  changeDesk,
  removeDesk
};