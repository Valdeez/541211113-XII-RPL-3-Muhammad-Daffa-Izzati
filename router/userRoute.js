const express = require("express");
const router = express.Router();

<<<<<<< HEAD
router.get('/user', userController.index)
router.get('/user/:id', userController.search)
router.post('/user', userController.store)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.destroy)

module.exports = router
=======
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
>>>>>>> 88facc1dba0962951ceb633f014529a8733b9441
