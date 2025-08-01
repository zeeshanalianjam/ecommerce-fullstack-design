import axios from "axios";
import { baseUrl, summaryApi } from "../common/summaryApi";
import { handleApiError } from "./handleApiError";

const Axios = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

Axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    let originalRequest = error.config;

    // Avoid infinite loop on refresh-token endpoint
    if (originalRequest.url.includes("refresh-token")) {
      return Promise.reject(error);
    }

    if (
      (error.response?.status === 401 ||
        error.response?.data?.error === "jwt expired") &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        const newAccessToken = await refreshAccessToken(refreshToken);
        if (newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return Axios(originalRequest);
        }
      }
    }
    return Promise.reject(error);
  }
);

const refreshAccessToken = async (refreshToken) => {
  try {
     const response = await axios({
      ...summaryApi.refreshToken,
      headers: {
        Authorization: `Bearer ${refreshToken}`,
        "Content-Type": "application/json",
      },
      withCredentials: true, // if your refresh endpoint uses cookies
      baseURL: baseUrl,
    });

    if (response.data.success) {
      const accessToken = response.data.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      return accessToken;
    }
  } catch (error) {
    console.error("Error refreshing access token:", error);
    handleApiError(error);
  }
};

export { Axios };
