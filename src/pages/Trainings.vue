<template>
	<v-container :class="{'pa-0' : $vuetify.display.xs}">
		<div class="d-flex align-center flex-column">
			<h2 class="mb-3 headline font-weight-light mt-8">Выберите тип тренировки</h2>
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
			<v-timeline align="start" side="end" v-if="trainingStore.levelData.level">
				<v-timeline-item
						size="small"
						min-height="100vh"
						dot-color="deep-purple-darken-1"
						density="compact"
						hide-opposite
						elevation="2"
				>
					<div :class="{'ml-n3 pr-6': $vuetify.display.xs}">
						<h1 class="mt-n1 headline font-weight-light">
							Уровень {{ trainingStore.levelData.level.index }}
						</h1>
						<p class="text-caption mb-4">
							{{
								trainingStore.levelData.level.valueMin + trainingStore.levelData.level.valueName + ' - ' + trainingStore.levelData.level.valueMax + trainingStore.levelData.level.valueName
							}}
						</p>
						<p class="mb-4">Этот уровень для начинающих. Тут тебе предстоит подготовить свое тело к будущем достижениям. Вот три урока для тебя.</p>
							<v-row>
								<v-col cols="12"
											 sm="6"
											 v-for="lesson in trainingStore.levelData.level.workouts"
											 :key="lesson.id"
								>
									<v-card class="elevation-2" rounded>
										<iframe width="100%" height="200" src="https://www.youtube-nocookie.com/embed/jsZoIZm6d5w"
														title="YouTube video player" frameborder="0"
														allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
														allowfullscreen></iframe>

										<v-card-title>
											{{ lesson.name }}
										</v-card-title>

										<v-card-text>
											{{ lesson.description }}
										</v-card-text>
									</v-card>
								</v-col>
							</v-row>
					</div>
				</v-timeline-item>
			</v-timeline>
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
