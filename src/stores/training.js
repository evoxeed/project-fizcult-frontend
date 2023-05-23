import {defineStore} from 'pinia'
import {api} from "@/api/api.js";
import {useLoadingStore} from "@/stores/loading.js";

export const useTrainingStore = defineStore('training', {
    state: () => ({
        skillsData: JSON.parse(localStorage.getItem('skillsData')) || [],
        levelData: {},
        levelId: null
    }),
    actions: {
        setSkillsData(payload) {
            this.skillsData = payload
            if (payload) {
                localStorage.setItem('skillsData', JSON.stringify(payload))
            } else {
                localStorage.removeItem('skillsData')
            }
        },
        setLevelData(payload) {
            this.levelData = payload.data
        },
        setLevelId(payload) {
            this.levelId = payload
        },
        level(id) {
            const loadingStore = useLoadingStore()
            loadingStore.setLoading(true)
            api
                .level(id)
                .then((response) => {
                    this.setLevelData(response)
                    this.setLevelId(id)
                })
                .catch((error) => {
                    console.error(error)
                })
                .finally(() => {
                    loadingStore.setLoading(false)
                })
        },
        skills() {
            const loadingStore = useLoadingStore()
            loadingStore.setLoading(true)
            api
                .skills()
                .then((response) => {
                    this.setSkillsData(response.data)
                })
                .catch((error) => {
                    console.error(error)
                })
                .finally(() => {
                    loadingStore.setLoading(false)
                })
        }
    }
})
