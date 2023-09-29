const express = require("express");

const {
  createUser,
  getUserById,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

// Routes to handle the CRUD Operations
router.post("/", createUser);
router.get("/:id", getUserById);
router.put("/:id",updateUser)



module.exports = router;
