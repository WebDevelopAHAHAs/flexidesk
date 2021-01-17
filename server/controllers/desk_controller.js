const Desk = require('../models/Desk');
const {
  getDeskByID, getAllDesks,
  deleteDesk, updateDesk
} = require('../utilities/desk_utilities')

const { getAllBookingsByDate  } = require('../utilities/booking_utilities')

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
  console.log("Called getDesks")
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
  console.log("Called getDesk")
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

const getAllAvailableDesksByDate = function (req, res) {
  console.log("Called getAllAvailableDesksByDate")
  getAllDesks().exec((err, desks) => {
      if (err) {
          res.status(500);
          return res.json({
              error: err.message
          });
      }

      // console.log("Desks: ", desks)
      
      getAllBookingsByDate(req).exec((err, bookings) => {
        if (err) {
          res.status(500);
          return res.json({ error: err.message });
        }

        console.log("Bookings: ", bookings)
        // console.log("All bookings of date: ", req.params.date)

        let filteredDesks = []
        
        console.log(bookings.length)
        if(bookings.length != 0) {
          for(let booking of bookings) {
            for(let desk of desks) {
              console.log(booking.desk_id, desk._id)
              if(booking.desk_id != desk._id) {
                filteredDesks.push(desk)
              }
            }        
          }
          res.send(filteredDesks);
        }
        else
        {
          res.send(desks);
        }            
      });
  });

};

module.exports = {
  newDesk,
  getDesks,
  getDesk,
  changeDesk,
  removeDesk,

  getAllAvailableDesksByDate
};