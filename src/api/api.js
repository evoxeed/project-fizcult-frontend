import { apiRequest } from "./requstCreator";

export const api = {
    logIn: async (body) => apiRequest("/login", "post", body),
    registration: async (body) => apiRequest("/registration", "post", body),
    userInfo: async () => apiRequest("/user/info","get"),
    skills : async () => apiRequest("/skills", "get"),
    lesson : async (skillId, lessonLevelId) => apiRequest(`/user/skill/${skillId}/lesson/${lessonLevelId}`, "get"),
    selectSkill: async (id) => apiRequest(`/user/skill/${id}`, "get"),

};

