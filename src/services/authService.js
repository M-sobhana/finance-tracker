import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth'; // Adjust if your backend uses a different port/path

export const register = async (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const login = async (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};
