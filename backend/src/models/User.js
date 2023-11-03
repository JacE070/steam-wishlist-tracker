// Import the necessary module from mongoose
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define the user schema
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Please provide a username"],
		unique: true,
		trim: true,
	},
	email: {
		type: String,
		required: [true, "Please provide an email address"],
		unique: true,
		trim: true,
		lowercase: true,
		// Add validation to ensure email format
		match: [/.+\@.+\..+/, "Please fill a valid email address"],
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
		minlength: 6,
		// Do not return password by default
		select: false,
	},
	// Add any additional fields as required
	createdAt: {
		type: Date,
		default: Date.now,
	},
	// You could also add fields for password reset tokens, profile pictures, etc.
});

// Create the model from the schema and export it
const User = mongoose.model("User", userSchema);

module.exports = User;
