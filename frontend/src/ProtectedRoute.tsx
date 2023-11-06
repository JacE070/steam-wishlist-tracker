// ProtectedRoute.tsx
import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
	children: ReactElement;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const isAuthenticated = Boolean(localStorage.getItem("token"));

	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	return children;
};

export default ProtectedRoute;
