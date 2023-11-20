import React from "react";
import {
	Card,
	CardContent,
	Typography,
	Button,
	CardMedia,
	Box,
} from "@mui/material";
import GameDeal from "../../models/GameDeal"; // Import the GameDeal type

interface WishlistItemProps {
	gameDeal: GameDeal; // Use GameDeal type for props
}

const WishlistItem: React.FC<WishlistItemProps> = ({ gameDeal }) => {
	return (
		<Card variant="outlined">
			<Box>
				{/* Increased size of the avatar image */}
				<CardMedia
					component="img"
					image={gameDeal.thumb}
					alt={gameDeal.title}
					style={{ width: "100%", height: "auto" }} // Adjusted for better image fit
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2" noWrap>
						{gameDeal.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Sale Price: ${gameDeal.salePrice}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Normal Price: ${gameDeal.normalPrice}
					</Typography>
					<Button
						variant="contained"
						color="primary"
						fullWidth
						style={{ marginTop: 16 }}
					>
						View Details
					</Button>
				</CardContent>
			</Box>
		</Card>
	);
};

export default WishlistItem;
