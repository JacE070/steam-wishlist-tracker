const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Your User model

const authMiddleware = async (req, res, next) => {
	try {
		// Extract the token from the Authorization header
		const token = req.header("Authorization")?.replace("Bearer ", "");
		if (!token) {
			return res.status(401).send({ error: "No token provided." });
		}

		// Verify the token with the secret key
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		// Find the user with the ID in the decoded token payload
		const user = await User.findOne({ _id: decoded.user.id });
		if (!user) {
			throw new Error("User not found.");
		}

		// Attach user to the request object
		req.user = user;
		next();
	} catch (error) {
		console.error(error);
		res.status(401).send({ error: "Please authenticate." });
	}
};

module.exports = authMiddleware;
