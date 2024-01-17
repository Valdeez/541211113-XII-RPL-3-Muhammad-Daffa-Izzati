const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
const { verifyToken } = require("../middleware/authJwt");

// GET
router.get("/user", [verifyToken], userController.index);
router.get("/user/:id", userController.search);
// POST
router.post("/user", userController.store);
// PUT
router.put("/user/:id", userController.update);
// DELETE
router.delete("/user/:id", userController.destroy);

module.exports = router;
