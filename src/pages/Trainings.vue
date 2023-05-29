<template>
	<v-container :class="[{'pr-0' : $vuetify.display.xs}, 'pb-0 pt-0']">
		<div class="d-flex align-center flex-column">
			<router-view v-slot="{ Component, route }">
				<v-fade-transition mode="out-in">
					<div :key="route.path">
						<component :is="Component"></component>
					</div>
				</v-fade-transition>
			</router-view>
		</div>
	</v-container>
</template>

<script setup>
import {onBeforeRouteUpdate} from "vue-router";
import {useTrainingStore} from "@/stores/training.js";

const trainingStore = useTrainingStore()

onBeforeRouteUpdate( (to, from) => {
	if (to.params.skill && to.params.skill !== from.params.skill) {
		trainingStore.level(to.params.skill)
	}
})
</script>
