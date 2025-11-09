import axios from "axios";

// Replace this with your backend URL
const API = axios.create({
  baseURL: "http://192.168.0.105:4000", // Your local backend
});

export default API;
