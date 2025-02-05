import axios from "axios";

export const api = axios.create({
    baseURL: "https://foodexplorer-backend-6a6y.onrender.com"
});