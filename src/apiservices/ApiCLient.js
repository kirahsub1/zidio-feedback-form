import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "http://localhost:5001",
  // withCredentials: true,
});

export { CanceledError };
