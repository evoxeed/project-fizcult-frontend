<template>
  <v-container>
    <h2 class="mb-6 headline font-weight-light mt-8">Выберите доступное занятие:</h2>
    <v-row
        v-if="trainingStore.lessonLevel"
        align="center"
        justify="start"
        style="gap: 6px"
    >
      <v-col
          v-for="key in trainingStore.lessonLevel.total"
          :key="key"
          class="pa-0"
          cols="auto"
      >
        <v-chip
            :disabled="disableLessons[key]"
            size="large"
            variant="outlined"
            :to="`/trainings/${route.params.lessonLevelId}/${key}`"
        >
          <template v-if="completeLessons[key] || disableLessons[key]" v-slot:append>
            <v-icon v-if="disableLessons[key]" class="ml-1" icon="$lock"></v-icon>
            <v-icon v-else class="ml-1" icon="$checkCircle"></v-icon>
          </template>
          Занятие {{ key }}
        </v-chip>

      </v-col>
    </v-row>


  </v-container>
</template>
<script setup>
import {useTrainingStore} from "@/stores/training.js";
import {computed} from "vue";
import {useRoute} from "vue-router";
const route = useRoute();

const trainingStore = useTrainingStore()
trainingStore.selectActiveSkill(route.params.lessonLevelId)

let completeLessons = computed(() => {
  let lessons = {}
  for (let i = 1; i <= trainingStore.lessonLevel.total; i++) {
    lessons[i] = i < trainingStore.lessonLevel.current
  }
  return lessons
})

let disableLessons = computed(() => {
  let lessons = {}
  for (let i = 1; i <= trainingStore.lessonLevel.total; i++) {
    lessons[i] = i > trainingStore.lessonLevel.current
  }
  return lessons
})
</script>
