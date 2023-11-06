// Import the necessary module from mongoose
const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, "Please provide an email address"],
		unique: true,
		trim: true,
		lowercase: true,
		// Add validation to ensure email format
		match: [/.+\@.+\..+/, "Please fill a valid email address"],
	},
	username: {
		type: String,
		trim: true,
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
		minlength: 6,
		// Do not return password by default
		select: false,
	},
	steamId: {
		type: String,
		unique: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

// Create the model from the schema and export it
const User = mongoose.model("User", userSchema);

module.exports = User;
