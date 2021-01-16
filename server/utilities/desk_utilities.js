const Desk = require('../models/Desk');

const getAllDesks = function() {
  return Desk.find();
}

const getDeskByID = function(req) {
	return Desk.findById(req.params.id)
}

const deleteDesk = function(req) {
	return Desk.findByIdAndRemove(req.params.id)
}

const updateDesk = function (req) {
  req.body.modified_date = Date.now();
  // use new:true to return the updated desk rather than the original desk when the query is executed
  return Desk.findByIdAndUpdate(req.params.id, req.body, { new: true } );
    // ,{ new: true } // include if i dont want to return the old document
};

module.exports = { getDeskByID, getAllDesks, deleteDesk, updateDesk};