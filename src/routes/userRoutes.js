const express = require("express");
const { param } = require("express-validator");
const {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();
const {dataValidation} = require('../middleware/validatation')

// Routes to handle the CRUD Operations
router.post("/", dataValidation , createUser);
router.get(
  "/:id",
  [
    param("id").notEmpty().withMessage("Please provide a user ID"),
  ],
  getUserById
);
router.put("/:id", dataValidation, updateUser);
router.delete("/:id",deleteUser);



module.exports = router;
