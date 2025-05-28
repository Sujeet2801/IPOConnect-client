import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
});

// ---------- Auth APIs ------- //
export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);
export const logoutUser = () => API.get("/logout");
export const getCurrentUser = () => API.get("/me");
export const resendVerifyEmail = (data) => API.post("/resendverifyemail", data);
export const forgotPasswordRequest = (data) => API.post("/passwordresetrequest", data);
export const resetPassword = (token, data) => API.post(`/reset-password/${token}`, data);

// -------- IPO APIs -------- //
export const fetchAllIpos = () => API.get("/ipos");
export const fetchIposByStatus = (status) => API.get(`/ipo/by-status?status=${status}`);

// ---------- Blog APIs ------- //
export const fetchAllBlogs = () => API.get("/blogs");

// ------- SharkInvestor APIs ------- //
export const fetchAllSharkInvestors = () => API.get("/shark-investors");
export const fetchSharkInvestorByName = (sharkName) => API.get(`/shark-investors/${sharkName}`);

// ------- Broker APIs ------- //
export const fetchAllBrokers = () => API.get("/brokers");

// ------- Sector APIs ------- //
export const fetchAllSectors = () => API.get("/sectors");
export const fetchSectorsByMarketCap = (type) => API.get(`/sectors/marketcaps/${type}`);
export const fetchSectorByName = (sectorName) => API.get(`/sectors/${sectorName}`);

export default API;