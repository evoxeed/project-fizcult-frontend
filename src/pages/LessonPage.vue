<template>
  <v-btn variant="text" class="ma-2" :prepend-icon="mdiArrowLeft" size="small"  :to="{path: '/trainings/' + trainingStore.activeSkill.id}" exact>
    Все занятия
  </v-btn>
  <v-card
      color="transparent"
      flat
  >
    <v-window v-model="onboarding">
      <v-window-item
          v-for="n in length"
          :key="`card-${n}`"
          :value="n"
      >
        <v-card
            class="d-flex justify-center align-center flex-column mx-3"
            color="transparent"
            elevation="0"
        >
          <v-card class="ma-2" max-width="800px" width="100%" flat>
            <v-card-title class="text-center">Занятие 2</v-card-title>


<!--            <iframe class="px-2 rounded-lg"-->
<!--                frameBorder="0"-->
<!--                :height="$vuetify.display.xs ? 260 : 350"-->
<!--                src="https://rutube.ru/play/embed/19a1ce7c17c9cfa13117c023be6403c3?p=Adzr0NVNl7uAFWC0oiulrA"-->
<!--                width="100%"></iframe>-->
            <v-card-title class="font-weight-bold text-h5">
              Челночный бег {{ n }}
            </v-card-title>
            <v-card-text class="overflow-auto" style="height: 220px">
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab aliquam animi aspernatur eius enim
                facere hic, incidunt ipsa laboriosam minus, molestiae natus nihil nobis omnis quasi quidem tempore
                tenetur?
              </div>
              <div>Aut beatae blanditiis debitis deserunt ducimus error explicabo facere, iste iure mollitia, nobis
                numquam quae saepe sed veritatis. Eligendi fugit illum inventore itaque nam nisi, numquam odit
                temporibus velit vitae?
              </div>
              <div>Animi dolor dolorem doloremque error ex exercitationem recusandae repellat tenetur ut voluptates.
                Aperiam, porro quaerat! Excepturi exercitationem harum impedit inventore nulla numquam officia quasi
                rem, voluptate voluptatem voluptates voluptatibus voluptatum!
              </div>

            </v-card-text>
          </v-card>

        </v-card>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-center pa-0" >
      <v-pagination
          :size="$vuetify.display.xs ? 'small' : 'default'"
          v-model="onboarding"
          :length="length"
          :total-visible="6"
          :density="$vuetify.display.xs ? 'comfortable': 'default'"
          rounded
      ></v-pagination>
    </v-card-actions>
  </v-card>

</template>

<script setup>
import {useTrainingStore} from "@/stores/training.js";
import {ref} from "vue";
import {mdiArrowLeft} from "@mdi/js";

const trainingStore = useTrainingStore()
const length = ref(6)
const onboarding = ref(1)
</script>
