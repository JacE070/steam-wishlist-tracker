const express = require("express");
const { json } = require("express");
const connectDatabase = require("./utils/mongodb");
const auth = require("./middlewares/authMiddleware");

const app = express();
app.use(json()); // for parsing application/json

// Connect to the database
connectDatabase();

app.use("/api/users", require("./routes/userRoutes"));

app.use(auth);

app.use("/api/wishlist", require("./routes/wishlistRoutes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
