<template>
  <v-btn variant="text" class="ma-2" :prepend-icon="mdiArrowLeft" size="small"  :to="{path: '/trainings/' + route.params.lessonLevelId}" exact>
    Все занятия
  </v-btn>
  <v-card
      v-if="trainingStore.lessonData"
      color="transparent"
      flat
  >
    <v-window v-model="onboarding">
      <v-window-item
          v-for="(lesson, key) in trainingStore.lessonData"
          :key="key"
          :value="key + 1"
      >
        <v-card
            class="d-flex justify-center align-center flex-column mx-3"
            color="transparent"
            elevation="0"
        >
          <v-card class="ma-2" max-width="800px" width="100%" flat>
            <v-card-title class="text-center">Занятие {{ route.params.skill }}</v-card-title>

            <div :style="{'height' : $vuetify.display.xs ? '260px' : '350px'}">
              <iframe v-if="iframeVisible[key]" class="px-2 rounded-lg"
                      frameBorder="0"
                      height="100%"
                      src="https://rutube.ru/play/embed/19a1ce7c17c9cfa13117c023be6403c3?p=Adzr0NVNl7uAFWC0oiulrA"
                      width="100%"></iframe>
            </div>


            <v-card-title class="font-weight-bold text-h5">
              {{ lesson.name }}
            </v-card-title>
            <v-card-text class="overflow-auto" style="height: 220px">
              {{ lesson.description}}
            </v-card-text>
          </v-card>

        </v-card>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-center pa-0" >
      <v-pagination
          :size="$vuetify.display.xs ? 'small' : 'default'"
          v-model="onboarding"
          :length="trainingStore.lessonData.length"
          :total-visible="6"
          :density="$vuetify.display.xs ? 'comfortable': 'default'"
          rounded
          @update:model-value="handlePageSwitch"
      ></v-pagination>
    </v-card-actions>
  </v-card>

</template>

<script setup>
import {useTrainingStore} from "@/stores/training.js";
import {ref, watchEffect} from "vue";
import {mdiArrowLeft} from "@mdi/js";
import {useRoute} from "vue-router";
const route = useRoute();
const trainingStore = useTrainingStore()

trainingStore.lesson(route.params.skill, route.params.lessonLevelId)

const onboarding = ref(1)

const iframeVisible = ref([]);

watchEffect(() => {
  if (trainingStore.lessonData) {
    iframeVisible.value = trainingStore.lessonData.map(() => false);
    if (iframeVisible.value.length > 0) {
      iframeVisible.value[0] = true;
    }
  }
});

const handlePageSwitch = (newPage) => {
  // Делаем все iframe невидимыми
  iframeVisible.value.fill(false);
  // Делаем текущий iframe видимым:
  iframeVisible.value[newPage - 1] = true;
}
</script>
