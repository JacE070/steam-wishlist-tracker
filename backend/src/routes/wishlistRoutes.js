// userRoutes.js
const express = require("express");
const router = express.Router();
const wishlistController = require("../controllers/wishlistController");

// Wishlist route
router.get("/", wishlistController.getWishlist);

// Export the router for use in your app.js
module.exports = router;
