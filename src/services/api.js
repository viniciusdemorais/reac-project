import axios from "axios";

const api = axios.create({ baseURL: "localhost/api" });

export default api;
