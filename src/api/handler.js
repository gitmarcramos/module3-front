import axios from "axios";

const APIHandler = (() => {
  return axios.create({
    baseURL: "http://localhost:5550",
    // baseURL: import.meta.env.REACT_APP_BACKEND_URL,
    withCredentials: true,
  });
})();

export default APIHandler;