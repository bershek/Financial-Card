import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    // Here, we can globally handle errors
    return Promise.reject(err);
  },
);
