const mongoose = require("mongoose")

//User Model for user details
const userSchema = mongoose.Schema(	{
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
  },
  address: {
    type: String,
    required: [true, "Please enter your address"],
  },
  city: {
    type: String,
    required: [true, "Please enter your city"],
  },
  country: {
    type: String,
    required: [true, "Please enter your country"],
  }
},
  {
	timestamps: true
  })

const User = mongoose.model("User", userSchema);

module.exports = User;