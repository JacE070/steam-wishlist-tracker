// src/services/authService.ts
import axios from "axios";

const API_URL = process.env.REACT_APP_DEV_API_URL;

interface AuthData {
	email: string;
	password: string;
}

export const register = async (data: AuthData) => {
	return axios.post(`${API_URL}users/register`, data);
};

export const login = async (data: AuthData) => {
	return axios.post(`${API_URL}users/login`, data);
};

// You can add more auth-related functions here
