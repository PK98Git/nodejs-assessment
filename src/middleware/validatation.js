const { check, validationResult } = require("express-validator");

const dataValidation = [
  check("name", "Invalid Name").trim().notEmpty().escape(),
  check("email", "Invalid email").trim().isEmail().notEmpty().escape(),
  check("address", "Invalid Address").trim().notEmpty().escape(),
  check("city", "Invalid city").trim().notEmpty().escape(),
  check("country", "Invalid country").trim().notEmpty().escape(),
];

module.exports = { dataValidation };
