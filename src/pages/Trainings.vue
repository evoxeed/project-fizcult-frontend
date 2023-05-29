<template>
	<router-view v-slot="{ Component, route }">
		<v-fade-transition mode="out-in">
			<div :key="route.path">
				<component :is="Component"></component>
			</div>
		</v-fade-transition>
	</router-view>
</template>

<script setup>
import {onBeforeRouteUpdate} from "vue-router";
import {useTrainingStore} from "@/stores/training.js";

const trainingStore = useTrainingStore()

onBeforeRouteUpdate((to, from) => {
	if (to.params.skill && to.params.skill !== from.params.skill) {
		trainingStore.level(to.params.skill)
	}
})
</script>
