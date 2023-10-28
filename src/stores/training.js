import {defineStore} from 'pinia'
import {api} from "@/api/api.js";
import {useLoadingStore} from "@/stores/loading.js";

export const useTrainingStore = defineStore('training', {
    state: () => ({
        skillsData: null,
        lessonLevel: null,
        lessonData: null
    }),
    actions: {
        setSkillsData(payload) {
            this.skillsData = payload
        },
        setLessonLevel(payload) {
            this.lessonLevel = payload
        },
        setLessonData(payload) {
          this.lessonData = payload
        },

        selectActiveSkill(skill) {
            const loadingStore = useLoadingStore()
            loadingStore.setLoading(true)
            api
                .selectSkill(skill)
                .then((response) => {
                    this.setLessonLevel(response.data.lessons)
                })
                .catch((error) => {
                    console.error(error)
                })
                .finally(() => {
                    loadingStore.setLoading(false)
                })
        },
        lesson(skillId, lessonLevelId) {
            const loadingStore = useLoadingStore()
            loadingStore.setLoading(true)
            api
                .lesson(skillId, lessonLevelId)
                .then((response) => {
                    console.log("lessonData", response.data.lesson.exercises)
                    this.setLessonData(response.data.lesson.exercises)
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
                    response.data.skills.forEach(skill => {
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
