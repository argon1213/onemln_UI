import axios from "./index";

export function login(user) {
  console.log(user);
  return axios.post(`/login`, user);
}

export function logout() {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  return axios.post(`/logout`, {
    headers: headers,
  });
}

export function register(user) {
  return axios.post("/register", user);
}
