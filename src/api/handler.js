import axios from "axios";


const APIHandler = (() => {
  return axios.create({
    // baseURL: "http://localhost:5550",
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
  });
})();

export default APIHandler;