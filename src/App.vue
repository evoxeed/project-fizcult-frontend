<template>
  <v-app>
    <v-app-bar
        v-if="this.$route.name !== 'login' && this.$route.name !== 'registration'"
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
      <router-link to="/login" class="text-decoration-none text-shades-black position-absolute" style="right: 0">Войти</router-link>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import {ref} from "vue";

const links = ref([
  'Главная',
  'Тренировки',
  'Профиль',])
</script>
