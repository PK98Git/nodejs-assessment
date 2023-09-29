const express = require("express");
const connectDB = require("./config/db");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 5000;

app.use(express.json());

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is up on port ` + port);
  });
});
