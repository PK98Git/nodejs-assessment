const express = require("express");

const { createUser, getUserById } = require("../controllers/userController");

const router = express.Router();

// Routes to handle the CRUD Operations
router.post("/", createUser);
router.get("/:id", getUserById);



module.exports = router;
