// userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middlewares/authMiddleware");

// User registration route
router.post("/register", userController.registerUser);

// User login route
router.post("/login", userController.loginUser);

// User steamId route
router.patch("/steamId", auth, userController.updateSteamId);

// Export the router for use in your app.js
module.exports = router;
