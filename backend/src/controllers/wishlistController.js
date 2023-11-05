const { getSteamWishlist, getGameDealsInfo } = require("../utils/steamApi");

exports.getWishlist = async (req, res) => {
	try {
		if (!req.user.steamId) {
			return res.status(400).send("No Steam ID found.");
		}
		// Get the user's wishlist
		const wishlist = await getSteamWishlist(req.user.steamId);

		// Get the appIds from the wishlist
		const appIds = Object.keys(wishlist);

		// Get the games info from the appIds
		const gamesInfo = await getGameDealsInfo(appIds);

		// Send the games info to the client
		res.json(gamesInfo);
	} catch (error) {
		console.error(error);
		res.status(500).send("Server error");
	}
};
