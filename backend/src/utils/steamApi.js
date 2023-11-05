require("dotenv").config();
const axios = require("axios");

exports.getSteamWishlist = async (steamId) => {
	try {
		const wishlistUrl = `https://store.steampowered.com/wishlist/profiles/${steamId}/wishlistdata`;
		const response = await axios.get(wishlistUrl);
		return response.data; // The wishlist should be here
	} catch (error) {
		console.error("Error fetching wishlist:", error.message);
		throw new Error("Unable to fetch Steam wishlist.");
	}
};

exports.getGameDealsInfo = async (appIds) => {
	// TODO: In order to handle case that total results excceeds 60, we need to make multiple requests
	try {
		const gameDealsUrl = `https://www.cheapshark.com/api/1.0/deals?storeID=1&steamAppID=${appIds.join(
			","
		)}`;
		const response = await axios.get(gameDealsUrl);
		return response.data; // The game info should be here
	} catch (error) {
		console.error("Error fetching game info:", error);
		throw new Error("Unable to fetch Steam game info.");
	}
};
