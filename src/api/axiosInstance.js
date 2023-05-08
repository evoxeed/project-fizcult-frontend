import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://api-fizcult.maffinca.com',
    responseType: "json",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
