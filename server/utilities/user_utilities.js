const getAllUsers = (req) => {
  return User.find();
}

modules.export = { getAllUsers};

// export default utilities;