<template>
	<v-snackbar
			v-model="notifStore.isActive"
			:timeout="notifStore.timout"
			:color="notifStore.color"
			location="top right"
			transition="slide-x-reverse-transition"
	>
		<div class="d-flex justify-center align-center">
			<v-icon class="mr-2">{{ mdiAlertCircleOutline }}</v-icon>
			{{ notifStore.text }}
		</div>
	</v-snackbar>
</template>

<script setup>
import {mdiAlertCircleOutline} from "@mdi/js";
import {useNotifStore} from "@/stores/notif.js";

const notifStore = useNotifStore()
</script>
