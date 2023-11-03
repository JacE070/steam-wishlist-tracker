// userController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Handle user registration
exports.registerUser = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		// Check if user already exists
		let user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({ msg: "User already exists" });
		}

		// Create new user
		user = new User({
			username,
			email,
			password,
		});

		// Hash password
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);

		// Save user to database
		await user.save();

		// Create and send JWT token
		const payload = {
			user: {
				id: user.id,
			},
		};

		jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: 3600 },
			(err, token) => {
				if (err) throw err;
				res.json({ token });
			}
		);
	} catch (err) {
		console.error(err);
		res.status(500).send("Server error");
	}
};

// Handle user login
exports.loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Check if user exists
		let user = await User.findOne({ email }, "password");
		if (!user) {
			return res.status(400).json({ msg: "Invalid credentials" });
		}

		// Check if password is correct
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ msg: "Invalid credentials" });
		}

		// Create and send JWT token
		const payload = {
			user: {
				id: user.id,
			},
		};

		jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: 3600 },
			(err, token) => {
				if (err) throw err;
				res.json({ token });
			}
		);
	} catch (err) {
		console.error(err);
		res.status(500).send("Server error");
	}
};

// Get user profile
exports.getUserProfile = async (req, res) => {
	// Implement logic to retrieve user profile here
	res.status(200).send("User profile");
};

// Add any other user-related methods as needed.
