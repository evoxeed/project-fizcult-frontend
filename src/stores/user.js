import {defineStore} from 'pinia'
import {api} from "@/api/api.js";

export const useUserStore = defineStore('user', {
    state: () => ({
        userToken: localStorage.getItem('userToken') ?? '',
        userData: JSON.parse(localStorage.getItem('userData')) ?? null,
        errorMassage: '',
        isLoading: false
    }),

    actions: {
        setLoading(payload) {
            this.isLoading = payload
        },

        updateUserData() {
            api
                .test()
                .then((response) => {
                    this.setUserData(response.data.user)
                })
                .catch(error => {
                    console.error(error)
                })
        },

        setUserData(newUserData) {
            this.userData = newUserData
            if (newUserData) {
                localStorage.setItem('userData', JSON.stringify(newUserData))
            } else {
                localStorage.removeItem('userData')
            }
        },

        setUserToken(newToken) {
            this.userToken = newToken
            if (newToken) {
                localStorage.setItem('userToken', newToken)
            } else {
                localStorage.removeItem('userToken')
            }
        },

        registration(body) {
            this.errorMassage = ''
            this.setLoading(true)
            api
                .registration(body)
                .then((response) => {
                    this.setUserData(response.data)
                    this.$router.push({path: this.$router.currentRoute.value.query?.redirect || '/'})
                })
                .catch((error) => {
                    console.error(error)
                    if (error.response.data.result === false) {
                        this.errorMassage = error.response.data.error
                    }
                })
                .finally(() => {
                    this.setLoading(false)
                })
        },

        login(body) {
            this.errorMassage = ''
            this.setLoading(true)
            api
                .logIn(body)
                .then((response) => {
                    if (response.data.result === false && response.data.error === 'Invalid credentials') {
                        this.errorMassage = 'Неверный логин или пароль'
                        return
                    }
                    if (response.data.auth_token) {
                        this.setUserToken(response.data.auth_token)
                        this.$router.push({path: this.$router.currentRoute.value.query?.redirect || '/'})
                    }
                })
                .catch((error) => {
                    console.error(error)
                })
                .finally(() => {
                    this.setLoading(false)
                })
        },
    }
})
