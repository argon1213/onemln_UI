import axios from "./index";

export function getUser() {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  return axios.get(`/user`, { headers: headers });
}

export function editUser(user) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  return axios.put(`/user`, user, { headers: headers });
}
