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
				<v-col cols="12" :sm="6"
							 v-for="skill in trainingStore.skillsData"
							 :key="skill.id">
					<v-item v-slot="{ isSelected, selectedClass, toggle }"
									:value="skill.id">
						<v-card
								@click="toggle"
								class="trainingItems"
								rounded
						>
							<v-img
									:src="`https://loremflickr.com/320/240/run?random=${skill.id}`"
									height="200"
									cover
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
			router.push({name: 'lessonPage', params: {skill: newSelectSkills}})
		}
)

trainingStore.skills()
</script>
