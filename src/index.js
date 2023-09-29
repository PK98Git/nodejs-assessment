const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", require("./routes/userRoutes"));

const port = 5000;

// Connect to the database and start the server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is up on port ` + port);
  });
});
