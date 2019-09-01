import axios from "axios";

import { TokenGen } from "./authenticator";

const api = axios.create({ baseURL: "http://empresas.ioasys.com.br/api/v1/" });

api.interceptors.request.use(async config => {
  const token = TokenGen();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;