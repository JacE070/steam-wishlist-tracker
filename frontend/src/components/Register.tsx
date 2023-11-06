// Register.tsx
import React, { useState } from "react";
import {
	Button,
	TextField,
	Typography,
	Link,
	Grid,
	Box,
	Paper,
	Snackbar,
	Alert,
} from "@mui/material";
import { register } from "../services/authService";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { AxiosError } from "axios";

const Register: React.FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [openSnackbar, setOpenSnackbar] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const response = await register({ email: username, password });
			// Handle response / redirect to login page
			localStorage.setItem("token", response.data.token);
			navigate("/dashboard");
		} catch (error) {
			let errorMessage = "Registration failed";
			if (error instanceof AxiosError && error.response) {
				// Use type assertion to tell TypeScript that error is an instance of Error
				errorMessage += ": " + error.response.data.msg;
			} else {
				// Handle cases where error is not an instance of Error
				errorMessage += ". An unknown error occurred.";
			}
			setSnackbarMessage(errorMessage);
			setOpenSnackbar(true);
		}
	};

	const handleCloseSnackbar = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === "clickaway") {
			return;
		}
		setOpenSnackbar(false);
	};

	return (
		<Grid container justifyContent="center">
			<Grid item xs={12} sm={8} md={6} lg={4}>
				<Paper elevation={6} sx={{ margin: 2, padding: 2 }}>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<Typography variant="h5" align="center">
							Register
						</Typography>
						<TextField
							margin="normal"
							required
							fullWidth
							label="Username"
							name="username"
							autoFocus
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{/* Repeat Password, Email, etc. */}
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Register
						</Button>
						<Grid container justifyContent="space-between">
							<Grid item>
								<Link component={RouterLink} to="/" variant="body2">
									Back to Home
								</Link>
							</Grid>
							<Grid item>
								<Link component={RouterLink} to="/login" variant="body2">
									Already have an account? Login
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Paper>
			</Grid>
			<Snackbar
				open={openSnackbar}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
			>
				<Alert
					onClose={handleCloseSnackbar}
					severity="error"
					sx={{ width: "100%" }}
				>
					{snackbarMessage}
				</Alert>
			</Snackbar>
		</Grid>
	);
};

export default Register;
