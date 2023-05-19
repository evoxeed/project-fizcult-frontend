<template>
	<v-app>
		<v-toolbar
				v-if="route.name !== 'login' && route.name !== 'registration'"
				class="px-3"
				color="white"
				flat
				density="compact"
		>

			<v-toolbar-title class="text-h5">Fizcult</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn v-if="!userStore.userToken" variant="text" to="/login">Войти</v-btn>
			<div v-else class="">
				Добро пожаловать,
				<router-link :to="{name: 'profile'}" class="text-decoration-none text-black">
					<strong>{{ userStore.userData?.first_name }}</strong>
				</router-link>!
			</div>

			<template v-slot:extension>
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
							:disabled="link.protected ? !!!userStore.userToken : false"

					>
						{{ link.name }}
					</v-tab>
				</v-tabs>
				<v-spacer></v-spacer>

			</template>
		</v-toolbar>

		<v-main class="bg-grey-lighten-3">
			<router-view/>
		</v-main>
		<notif/>
	</v-app>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useUserStore} from "@/stores/user.js";
import {useRoute} from "vue-router";
import notif from "@/components/Notif.vue";
import {mdiExitToApp} from "@mdi/js";

const links = ref([
	{name: 'Главная', to: 'home', protected: false},
	{name: 'Тренировки', to: 'trainings', protected: true},
	{name: 'Профиль', to: 'profile', protected: true},
])

const userStore = useUserStore()
const route = useRoute();

onMounted(() => {
	if (!!userStore.userToken && !userStore.userData) {
		console.log(123)
		userStore.updateUserData()
	}
})

</script>
