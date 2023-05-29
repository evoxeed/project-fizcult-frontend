<template>
	<v-timeline align="start" truncate-line="end" side="end" v-if="trainingStore.levelId">
		<v-timeline-item
				v-for="level in trainingStore.getCurrentLessons"
				:key="level.index"
				fill-dot
				size="small"
				:dot-color="iconColorLevel(level)"
				density="compact"
				hide-opposite
				elevation="2"
		>
			<template v-slot:icon>
				<v-icon>{{ iconAccessLevel(level) }}</v-icon>
			</template>
			<div :class="{'ml-n3 pr-6': $vuetify.display.xs}">
				<h1 class="mt-n1 headline font-weight-light">
					Уровень{{ level.index }}
				</h1>
				<p class="text-caption mb-4">
					{{
						level.valueMin + trainingStore.activeSkill.valueName + ' - ' + level.valueMax + trainingStore.activeSkill.valueName
					}}
				</p>
				<div v-if="level.index === trainingStore.activeLevel">
					<p class="mb-4">{{ level.description }}</p>
					<v-row>
						<v-col cols="12"
									 sm="6"
									 v-for="lesson in level.workouts"
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
			</div>
		</v-timeline-item>
	</v-timeline>
</template>

<script setup>
import {useTrainingStore} from "@/stores/training.js";

const trainingStore = useTrainingStore()


const iconAccessLevel = (level) => {
	if (level.index < trainingStore.userLevel) {
		return '$checkCircle'
	} else if (level.index > trainingStore.userLevel) {
		return '$lock'
	}
}

const iconColorLevel = (level) => {
	if (level.index < trainingStore.userLevel) {
		return 'success'
	} else if (level.index > trainingStore.userLevel) {
		return 'error'
	} else {
		return 'deep-purple-darken-1'
	}
}
</script>
