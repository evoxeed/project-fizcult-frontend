<template>
	<v-container class="d-flex flex-column" style="gap: 20px">
		Домашняя страница
		<v-btn color="primary" :to="{name: 'test'}">Страница для авторизованных</v-btn>
		<v-btn color="primary" @click="sendTest">Тестовый запрос</v-btn>
		<v-card flat color="transparent" class="d-flex justify-center align-center">
			<v-fade-transition hide-on-leave>
				<v-progress-circular
						v-if="loading"
						indeterminate
						class="ma-10"
						:size="70"
						:width="7"
						color="primary"
				></v-progress-circular>
				<pre v-else :class="response?.result === false ? 'text-error' : 'text-success'">{{ response }}</pre>
			</v-fade-transition>
		</v-card>
	</v-container>
</template>

<script setup>
import {ref} from "vue";
import {api} from "@/api/api.js";

let response = ref('')
let loading = ref(false)

const sendTest = () => {
	response.value = ''
	loading.value = true
	api.test()
			.then(res => {
				response.value = res.data
			})
			.catch(err => {
				response.value = err.response.data
			})
			.finally(() => {
				loading.value = false
			})
}
</script>

<style scoped>

</style>
