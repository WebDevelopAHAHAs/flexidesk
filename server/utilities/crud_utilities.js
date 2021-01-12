
const getAllEntries = function(model) {
  return model.find();
}

const getEntryByID = function(model, id) {
	return model.findById(id)
}

const deleteEntry = function(model, id) {
	return model.findByIdAndRemove(id)
}

const updateEntry = function (model, id) {
  req.body.modified_date = Date.now();
  // use new:true to return the updated post rather than the original post when the query is executed
  return model.findByIdAndUpdate(id, req.body
    // ,{ new: true } // include if i dont want to return the document
  );
};

module.exports = { getAllEntries, getEntryByID, deleteEntry, updateEntry};