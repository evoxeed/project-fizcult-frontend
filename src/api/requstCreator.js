import { axiosInstance } from "./axiosInstance";
import { useUserStore } from "@/stores/user.js";

export const apiRequest = async (url, method, body = {}, options = {}) => {
    const userStore = useUserStore();

    const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(userStore.userToken ? {Authorization: `auth_key: ${userStore.userToken}`} : {})
    }

    if (method === "get" || method === "delete") {
        return axiosInstance[method](`${url}`, { headers, ...options });
    }

    return axiosInstance[method](`${url}`, body, { headers, ...options });
};
