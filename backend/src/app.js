const express = require("express");
const { json } = require("express");
const connectDatabase = require("./utils/mongodb");

const app = express();
app.use(json()); // for parsing application/json

// Your "User" and "Wishlist" models would go here (e.g., with Mongoose for MongoDB)
// const User = require('./models/User');
// const Wishlist = require('./models/Wishlist');

// Connect to the database
connectDatabase();

app.use("/api/users", require("./routes/userRoutes"));
// app.use("/api/wishlist", require("./routes/wishlistRoutes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
