import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosInstance.interceptors.request.use((config) => {
  return config;
});

export default AxiosInstance;
