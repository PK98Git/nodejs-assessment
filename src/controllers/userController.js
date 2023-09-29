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

// Controller function to get user details by ID
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update the user details 
const updateUser = async(req,res) =>{
  try {
    const {id} = req.params;
    const user = await User.findByIdAndUpdate(id,req.body);
    if(!user){
      return res.status(404).json({message:`Cannot find the user with ID ${id}`});
    }
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
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
    res.status(200).json(updatedUser);
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
