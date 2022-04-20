import axios from "axios";

const BASE_API = "http://localhost:5000";

// Register new user
const register = async (userData) => {
  const response = await axios.post(`${BASE_API}/register`, userData);

  if (response.data) {
    sessionStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (credentials) => {
  const response = await axios.post(`${BASE_API}/login`, credentials);

  if (response.data) {
    sessionStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Log out user
const logout = async () => {
  sessionStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
