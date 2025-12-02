import axios from "axios";
import { baseURL } from "./configService";

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const setAuthToken = async (token: string | undefined) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const setDeviceId = async (id: string) => {
  axiosInstance.defaults.headers.common["X-DeviceID"] = id;
};

export const setCookie = async (cookie: string) => {
  axiosInstance.defaults.headers.common.Cookie = `.AspNet.Consent=yes; justbuy_cart_session=${cookie}`;
};

export const removeAuthToken = () => {
  delete axiosInstance.defaults.headers.common.Authorization;
};

axiosInstance.interceptors.request.use(async (config) => {
  return config;
});

axiosInstance.interceptors.response.use(
  async (response) => {
    if (response.data && response.data.error) {
      return Promise.reject(response);
    }
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
