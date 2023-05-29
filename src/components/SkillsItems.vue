<template>
	<h2 class="mb-3 headline font-weight-light mt-10">Выберите тип тренировки:</h2>
	<v-item-group
			v-model="selectSkills"
			divided
			mandatory
			selected-class="bg-primary"
			class="d-flex flex-wrap mb-16"
			style="gap: 10px"
	>
		<v-item v-slot="{ isSelected, selectedClass, toggle }"
						v-for="skill in trainingStore.skillsData"
						:key="skill.id"
						:value="skill.id">
			<v-card
					width="400"
					@click="toggle"
			>
				<v-img
						:src="`https://loremflickr.com/320/240/run?random=${skill.id}`"
						height="200px"
						cover

				>
					<template v-slot:placeholder>
						<v-skeleton-loader color="grey-lighten-2" type="image, image"></v-skeleton-loader>
					</template>
				</v-img>
				<v-card-title>
					{{ skill.name }}
				</v-card-title>
			</v-card>
		</v-item>
	</v-item-group>
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

