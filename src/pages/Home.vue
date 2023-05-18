<template>
	<v-container class="d-flex flex-column" style="gap: 20px">
      Домашняя страница
			<v-btn @click="sendTest">Тестовый запрос</v-btn>
			<v-btn :to="{name: 'test'}">Страница для авторизованных</v-btn>
	</v-container>
</template>

<script setup>
import {ref} from "vue";
import {apiRequest} from "@/api/requstCreator.js";

let response = ref('')

const sendTest = () => {
    apiRequest('/test', 'get')
				.finally(responseD => {
                    response.value = responseD.data
				})
}
</script>

<style scoped>

</style>
