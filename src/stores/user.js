import {defineStore} from 'pinia'
import {api} from "@/api/api.js";

export const useUserStore = defineStore('user', {
    state: () => ({
        userToken: 'sadasdadasd',
        userData: {}
    }),
    getters: {
        getUserToken: () => this.userToken
    },
    actions: {
        setUserData(newUserData) {
            this.userData = newUserData
            localStorage.setItem('userData', JSON.stringify(newUserData))
        },
        registration(body) {
            api
                .registration(body)
                .then((response) => {
                    this.setUserData(response.data)
                    this.$router.push({path: this.$router.currentRoute.value.query?.redirect || '/'})
                })
                .catch((error) => {
                    console.error(error)
                })
        },
    }
})
