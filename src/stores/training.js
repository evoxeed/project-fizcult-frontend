import {defineStore} from 'pinia'
import {api} from "@/api/api.js";
import {useLoadingStore} from "@/stores/loading.js";

export const useTrainingStore = defineStore('training', {
    state: () => ({
        skillsData: JSON.parse(localStorage.getItem('skillsData')) || [],
        levelData: null,
        levelId: null,
        activeSkill: null,
        activeLevel: null,
        userLevel: null
    }),
    getters: {
        getCurrentLessons(state) {
            return state.skillsData[state.levelId].levels.map((item) => {
                if (item.index === state.levelData.index) {
                    return state.levelData
                }
                return item
            })
        },
    },
    actions: {
        setSkillsData(payload) {
            this.skillsData = payload
            if (payload) {
                localStorage.setItem('skillsData', JSON.stringify(payload))
            } else {
                localStorage.removeItem('skillsData')
            }
        },
        setActiveSkill(payload) {
          this.activeSkill = payload
        },
        setUserLevel(payload) {
          this.userLevel = payload
        },
        setActiveLevel(payload) {
          this.activeLevel = payload
        },
        setLevelData(payload) {
            this.levelData = payload
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
                    // console.log("levelData", response.data.level)
                    this.setLevelId(id)
                    this.setActiveSkill(this.skillsData[id])
                    this.setActiveLevel(response.data.level.index)
                    this.setUserLevel(response.data.level.index)
                    this.setLevelData(response.data.level)
                    return response.data
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
                    const allSkillsData = {}
                    response.data.forEach(skill => {
                        allSkillsData[skill.id] = skill
                    })
                    this.setSkillsData(allSkillsData)
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
