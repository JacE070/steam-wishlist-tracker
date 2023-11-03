// config/database.js
const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = async () => {
	try {
		console.log(process.env.DATABASE_URL);
		const conn = await mongoose.connect(process.env.DATABASE_URL);

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (err) {
		console.error(`Error: ${err.message}`);
		process.exit(1);
	}
};

module.exports = connectDatabase;
