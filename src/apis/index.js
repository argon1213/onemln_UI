import axios from "axios";
// const instant = axios.create({baseURL: process.env.APP_API_ENDPOINT});
const instant = axios.create({baseURL: "http://127.0.0.1:8000/api"});

instant.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error)
  }
);

export default instant;