<template>
  <v-container>
    <h2 class="mb-6 headline font-weight-light mt-8">Выберите доступное занятие:</h2>
    <v-row
        align="center"
        justify="start"
        style="gap: 6px"
    >
      <v-col
          v-for="lesson in lessons"
          :key="lesson.id"
          cols="auto"
          class="pa-0"
      >
        <v-chip
            variant="outlined"
            size="large"
            :disabled="lesson.unavailable"
            to="/trainings/1/2"
        >
          <template v-if="lesson.completed || lesson.unavailable" v-slot:append>
            <v-icon class="ml-1" v-if="lesson.unavailable" icon="$lock"></v-icon>
            <v-icon class="ml-1" v-else icon="$checkCircle"></v-icon>
          </template>
          {{ lesson.label }}
        </v-chip>

      </v-col>
    </v-row>


  </v-container>
</template>
<script setup>
import {ref} from "vue";

const lessons = ref([
  {id: 0, label: 'Занятие 1', completed: true, unavailable: false},
  {id: 1, label: 'Занятие 2', completed: false, unavailable: false},
  {id: 2, label: 'Занятие 3', completed: false, unavailable: true},
  {id: 3, label: 'Занятие 4', completed: false, unavailable: true},
  {id: 4, label: 'Занятие 5', completed: false, unavailable: true},
  {id: 5, label: 'Занятие 6', completed: false, unavailable: true},
  {id: 6, label: 'Занятие 7', completed: false, unavailable: true},
  {id: 7, label: 'Занятие 8', completed: false, unavailable: true},
  {id: 8, label: 'Занятие 9', completed: false, unavailable: true},
  {id: 9, label: 'Занятие 10', completed: false, unavailable: true}
])
</script>
