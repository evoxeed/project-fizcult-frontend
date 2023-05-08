import { axiosInstance } from "./axiosInstance";
import { useUserStore } from "@/stores/user.js";

export const apiRequest = async (url, method, body = {}, options = {}) => {
    const userToken = useUserStore.getUserToken;
    const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        // (userToken ? Authorization: userToken : '')
    };

    if (method === "get" || method === "delete") {
        return axiosInstance[method](`${url}`, { headers, ...options });
    }

    return axiosInstance[method](`${url}`, body, { headers, ...options });
};
