import {defineStore} from 'pinia'
import {api} from "@/api/api.js";

export const useUserStore = defineStore('user', {
    state: () => ({
        userToken: 'sadasdadasd'
    }),
    getters: {
        getUserToken: (state) => state.userToken
    },
    actions: {
        registration(body) {
            api
                .registration(body)
                .then((response) => {
                    console.log(response)
                    return response.data
                })
        },
    }
})
