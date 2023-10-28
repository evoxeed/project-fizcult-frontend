<template>
  <v-container>
    <h2 class="mb-4 headline font-weight-light mt-8">Выберите тип тренировки:</h2>
      <v-row>
        <v-col v-for="skill in trainingStore.skillsData" :key="skill.id"
               :sm="6"
               cols="12">
            <v-card
                class="trainingItems"
                rounded
                @click="selectSkill(skill.id)"
            >
              <v-img
                  :src="`https://loremflickr.com/320/240/run?random=${skill.id}`"
                  cover
                  height="200"
              >
                <template v-slot:placeholder>
                  <v-skeleton-loader type="image, image"></v-skeleton-loader>
                </template>
              </v-img>
              <v-card-title class="headline font-weight-light">
                {{ skill.name }}
              </v-card-title>
              <v-card-text>
                {{skill.description}}
              </v-card-text>
            </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script setup>

import {useTrainingStore} from "@/stores/training.js";
import {useRouter} from "vue-router";

const router = useRouter();
const trainingStore = useTrainingStore()

trainingStore.skills()

const selectSkill = (id) => {
  router.push({name: 'lessonLevel', params: {lessonLevelId: id}})
}

</script>
