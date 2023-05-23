<template>
	<v-container class="d-flex flex-column" style="gap: 20px">
		На этой странице будет размещена информация о сервисе Fizcult
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
