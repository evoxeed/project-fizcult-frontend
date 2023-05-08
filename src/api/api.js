import { apiRequest } from "./requstCreator";

export const api = {
    logIn: async (body) => apiRequest("/login", "post", body),
    registration: async (body) => apiRequest("/registration", "post", body),
    test : async () => apiRequest("/test ", "get"),

};

