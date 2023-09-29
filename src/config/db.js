const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI; 
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
