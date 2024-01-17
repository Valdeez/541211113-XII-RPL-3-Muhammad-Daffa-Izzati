const express = require("express");
const router = express.Router();

const authController = require("../controller/authController");

module.exports = function (app) {};

router.post("/auth/signup", authController.signup);

router.post("/auth/signin", authController.signin);

module.exports = router;
