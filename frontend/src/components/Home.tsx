// Home.tsx
import React from "react";
import { Link as RouterLink, Navigate } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Container,
	Box,
} from "@mui/material";
import { isUserLoggedIn } from "../utils/auth";

const Home: React.FC = () => {
	if (isUserLoggedIn()) {
		return <Navigate to="/dashboard" replace />;
	}

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Steam Wishlist
					</Typography>
					<Button color="inherit" component={RouterLink} to="/login">
						Login
					</Button>
					<Button color="inherit" component={RouterLink} to="/register">
						Register
					</Button>
				</Toolbar>
			</AppBar>
			<Container maxWidth="md">
				<Box my={4}>
					<Typography variant="h4" component="h1" gutterBottom>
						Welcome to Steam Wishlist
					</Typography>
					<Typography paragraph>
						Discover the best deals for your Steam wishlist games and never miss
						a sale again.
					</Typography>
				</Box>
			</Container>
		</>
	);
};

export default Home;
