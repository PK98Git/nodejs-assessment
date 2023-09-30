const User = require("../models/userModel");
const { validationResult,param } = require("express-validator");

// Controller function to create a new user
const createUser = async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.create(req.body);
    console.log(req.body);
    res.status(201).json({ user, message: "New user added successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
// Controller function to get user details by ID
const getUserById = async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user, message: "User details found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update the user details 
const updateUser = async(req,res) =>{  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}
  try {
    const {id} = req.params;
    const user = await User.findByIdAndUpdate(id,req.body);
    if(!user){
      return res.status(404).json({message:`Cannot find the user with ID ${id}`});
    }
    const updatedUser = await User.findById(id);
    res.status(200).json({ updatedUser, message: "User details updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function delete the user details 

const deleteUser = async(req,res) =>{
  try {
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res
        .status(404)
        .json({ message: `Cannot find the user with ID ${id}` });
    }
    const updatedUser = await User.findById(id);
    res
      .status(200)
      .json({ updatedUser, message: "User details updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser
};
