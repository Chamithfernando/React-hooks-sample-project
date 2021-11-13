import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

/* get public content from user api test  */
const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

/*get the user content from api test */
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

/*get moderator content from api test */
const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};


/*get admin content from api test  */
const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
