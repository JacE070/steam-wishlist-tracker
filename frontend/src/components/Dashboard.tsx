// Dashboard.tsx
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	Typography,
	Container,
	Box,
	Card,
	CardContent,
	Grid,
	Button,
} from "@mui/material";

// Placeholder for user's wishlist items
const wishlistItems = [
	{ id: 1, title: "Game 1", price: "$19.99", onSale: true },
	{ id: 2, title: "Game 2", price: "$29.99", onSale: false },
	// ...more items
];

const Dashboard: React.FC = () => {
	const isLoggedIn = localStorage.getItem("token"); // or use context/state management
	const navigate = useNavigate();

	if (!isLoggedIn) {
		return <Navigate to="/login" replace />;
	}

	const handleLogout = () => {
		localStorage.removeItem("token"); // Remove the token from localStorage
		navigate("/login"); // Redirect the user to the login page
	};

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" style={{ flexGrow: 1 }}>
						Dashboard
					</Typography>
					<Button color="inherit" onClick={handleLogout}>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
			<Container maxWidth="lg">
				<Box my={4}>
					<Typography variant="h4" component="h1" gutterBottom>
						Your Wishlist
					</Typography>
					<Grid container spacing={3}>
						{wishlistItems.map((item) => (
							<Grid item xs={12} sm={6} md={4} key={item.id}>
								<Card variant="outlined">
									<CardContent>
										<Typography variant="h5" component="h2">
											{item.title}
										</Typography>
										<Typography color={item.onSale ? "error" : "textPrimary"}>
											{item.price}
										</Typography>
										{/* Add more details like game image, description, etc. */}
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</>
	);
};

export default Dashboard;
