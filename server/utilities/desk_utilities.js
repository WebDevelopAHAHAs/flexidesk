const Desk = require('../models/Desk');

const getAllDesks = function() {
  return Desk.find();
}

const getDeskByID = function(id) {
	return Desk.findById(id)
}

const deleteDesk = function(id) {
	return Desk.findByIdAndRemove(id)
}

const updateDesk = function (id) {
  req.body.modified_date = Date.now();
  // use new:true to return the updated desk rather than the original desk when the query is executed
  return Desk.findByIdAndUpdate(id, req.body, { new: true } );
    // ,{ new: true } // include if i dont want to return the old document
};

module.exports = { getDeskByID, getAllDesks, deleteDesk, updateDesk};