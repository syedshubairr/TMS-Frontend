/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const BASE_URL = "http://localhost:5000/";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const setAuthHeader = (token: string | null, api: any) => {
  if (token) {
    api.default.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.default.headers.common["Authorization"];
  }
};
