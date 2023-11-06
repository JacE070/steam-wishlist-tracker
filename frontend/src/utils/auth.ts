// auth.js
export const isUserLoggedIn = () => {
	return Boolean(localStorage.getItem("token"));
};
