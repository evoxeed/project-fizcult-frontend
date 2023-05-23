<template>
	<v-container>
		<div class="d-flex align-center flex-column">
			<v-item-group
					v-model="selectSkills"
					divided
					mandatory
					selected-class="bg-primary"
					class="d-flex flex-wrap"
					style="gap: 10px"
			>
				<v-item v-slot="{ isSelected, selectedClass, toggle }"
								v-for="skill in trainingStore.skillsData"
								:key="skill.id"
								:value="skill.id">
					<v-card
							:class="selectedClass"
							class="d-flex align-center justify-center pa-3"
							min-width="110"
							@click="toggle"
					>
						<div>
							{{ skill.name }}
						</div>
					</v-card>
				</v-item>
			</v-item-group>
			<pre v-if="trainingStore.levelData.level">{{ trainingStore.levelData }}</pre>
		</div>
	</v-container>
</template>

<script setup>
import {useTrainingStore} from "@/stores/training.js";
import {ref, watch} from "vue";

const trainingStore = useTrainingStore()
let selectSkills = ref(trainingStore.levelId)

watch(
		() => selectSkills.value,
		newSelectSkills => {
			trainingStore.level(newSelectSkills)
		}
)

trainingStore.skills()

</script>
