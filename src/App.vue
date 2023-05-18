<template>
  <v-app>
    <v-app-bar
        v-if="route.name !== 'login' && route.name !== 'registration'"
        class="px-3"
        color="white"
        flat
        density="compact"
    >
      <v-spacer></v-spacer>
      <v-tabs
          centered
          color="grey-darken-2"
      >
        <v-tab
            v-for="link in links"
            :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
			<v-btn v-if="!userStoreRef.userToken" variant="text" to="/login">Войти</v-btn>
			<v-btn v-else @click="logout" variant="text">Выйти</v-btn>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <router-view />
    </v-main>
		<notif/>
  </v-app>
</template>

<script setup>
import {ref} from "vue";
import {useUserStore} from "@/stores/user.js";
import {useRoute, useRouter} from "vue-router";
import notif from "@/components/Notif.vue";

const links = ref([
  'Главная',
  'Тренировки',
  'Профиль',])

const userStore = useUserStore()
const userStoreRef = ref(userStore)
const router = useRouter();
const route = useRoute();

const logout = () => {
  userStore.setUserData(null)
  userStore.setUserToken(null)
  router.push({name: 'home'})
}
</script>
