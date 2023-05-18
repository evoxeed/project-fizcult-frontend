<template>
	<v-btn variant="text" :prepend-icon="mdiArrowLeft" class="mt-5" size="small" :to="{name: 'home'}">
		На главную
	</v-btn>
	<div class="text-center">
		<v-icon :icon="mdiBookEducation" size="128"/>
		<h1 class="my-8 text-md-h2 text-h4">Тестовая страница для авторизованных</h1>
		<p class="text-subtitle-1">
			Скоро...
		</p>
	</div>

</template>

<script setup>
import {mdiArrowLeft, mdiBookEducation} from '@mdi/js'

</script>


