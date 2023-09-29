const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI;

    // Fetch the MongoDB URI from environment variables
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the DB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
