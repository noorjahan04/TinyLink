import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'https://tinylink-k9hl.onrender.com/';

const axiosInstance = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' }
});

export const BACKEND_BASE = API_BASE; 
export default axiosInstance;
