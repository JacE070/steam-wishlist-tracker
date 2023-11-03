// userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// User registration route
router.post("/register", userController.registerUser);

// User login route
router.post("/login", userController.loginUser);

// User profile route
router.get("/profile", userController.getUserProfile);

// Export the router for use in your app.js
module.exports = router;
