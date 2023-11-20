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
import Wishlist from "./wishlist/Wishlist";

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
					<Wishlist />
				</Box>
			</Container>
		</>
	);
};

export default Dashboard;
