import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use(
  function(config) {
    const xsrfToken = localStorage.getItem("XSRF-TOKEN");

    if (xsrfToken) {
      config.headers["X-XSRF-TOKEN"] = xsrfToken;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  },
);

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.withCredentials = true;

export default instance;
