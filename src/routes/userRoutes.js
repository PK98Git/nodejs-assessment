const express = require("express");

const { createUser } = require("../controllers/userController");

const router = express.Router();

// Route to handle the creation of a new user
router.post("/", createUser);


module.exports = router;
