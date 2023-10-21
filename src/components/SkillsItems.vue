<template>
  <v-container>
    <h2 class="mb-4 headline font-weight-light mt-8">Выберите тип тренировки:</h2>
    <v-item-group
        v-model="selectSkills"
        divided
        mandatory
        selected-class="bg-primary"
    >
      <v-row>
        <v-col v-for="skill in trainingStore.skillsData" :key="skill.id"
               :sm="6"
               cols="12">
          <v-item v-slot="{ isSelected, selectedClass, toggle }"
                  :value="skill.id">
            <v-card
                class="trainingItems"
                rounded
                @click="toggle"
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
            </v-card>
          </v-item>
        </v-col>
      </v-row>

    </v-item-group>
  </v-container>
</template>

<script setup>

import {useTrainingStore} from "@/stores/training.js";
import {ref, watch} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const trainingStore = useTrainingStore()
let selectSkills = ref(null)

watch(
    () => selectSkills.value,
    newSelectSkills => {
      trainingStore.setActiveSkill(trainingStore.skillsData[newSelectSkills])
      router.push({name: 'lessonLevel', params: {lessonLevelId: Number(newSelectSkills)}})
    }
)

trainingStore.skills()
</script>
