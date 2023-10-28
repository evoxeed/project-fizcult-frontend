<template>
	<v-toolbar
			v-if="route.name !== 'login' && route.name !== 'registration'"
			class="px-3"
			color="white"
			flat
			density="comfortable"
	>

		<v-toolbar-title class="text-h5">Fizcult</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn v-if="!userStore.userToken" variant="text" to="/login">Войти</v-btn>
		<div v-else-if="userStore.userToken && userStore.userData">
			Добро пожаловать,
			<router-link :to="{name: 'profile'}" class="text-decoration-none text-black">
				<strong>{{ userStore.userData?.firstName }}</strong>
			</router-link>!
		</div>

		<template v-slot:extension v-if="userStore.userToken">
			<v-spacer></v-spacer>
			<v-tabs
					color="grey-darken-2"
					center-active
					grow
			>
				<v-tab
						v-for="link in links"
						:key="link.name"
						:to="{name: link.to}"

				>
					{{ link.name }}
				</v-tab>
			</v-tabs>
			<v-spacer></v-spacer>

		</template>
	</v-toolbar>
	<div class="position-relative">
		<v-progress-linear
				v-if="route.name !== 'login' && route.name !== 'registration'"
				:active="loadingStore.isLoading"
				:indeterminate="loadingStore.isLoading"
				absolute
				color="primary"
		></v-progress-linear>
	</div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useUserStore} from "@/stores/user.js";
import {useRoute} from "vue-router";
import {useLoadingStore} from "@/stores/loading.js";

const loadingStore = useLoadingStore()

const links = ref([
	{name: 'Главная', to: 'home'},
	{name: 'Тренировки', to: 'trainings'},
	{name: 'Профиль', to: 'profile'},
])

const userStore = useUserStore()
const route = useRoute();

onMounted(() => {
	if (!!userStore.userToken && !userStore.userData) {
		userStore.updateUserData()
	}
})
</script>


<style scoped>

</style>
