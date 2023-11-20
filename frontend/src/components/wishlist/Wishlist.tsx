// Wishlist.tsx
import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, CircularProgress } from "@mui/material";
import WishlistItem from "./WishlistItem";
import GameDeal from "../../models/GameDeal"; // Import the GameDeal type

const API_URL = process.env.REACT_APP_DEV_API_URL;

const Wishlist: React.FC = () => {
	const [wishlistGames, setWishlistGames] = useState<GameDeal[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const token = localStorage.getItem("token"); // Retrieve the token from localStorage
				const headers = {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`, // Use the token in the Authorization header
				};

				const response = await fetch(`${API_URL}wishlist/`, { headers });
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setWishlistGames(data); // Assuming the API returns an array of GameDeal objects
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []); // Empty dependency array means this effect runs once after the initial render

	if (loading) {
		return <CircularProgress />;
	}

	return (
		<Box my={4}>
			<Typography variant="h4" component="h1" gutterBottom>
				Your Wishlist
			</Typography>
			<Grid container spacing={2}>
				{wishlistGames.map((gameDeal, index) => (
					<Grid item xs={12} sm={6} md={4} key={index}>
						{" "}
						<WishlistItem gameDeal={gameDeal} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Wishlist;
