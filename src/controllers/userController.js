const User = require("../models/userModel");

// Controller function to create a new user
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser
};
