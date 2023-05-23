<template>
    <div class="d-flex align-center justify-center overflow-hidden" style="height: 100vh">
			<v-btn variant="text" :prepend-icon="mdiArrowLeft" size="small" class="position-absolute" style="top: 20px; left: 20px" :to="{name: 'home'}">
				На главную
			</v-btn>
        <v-sheet width="400" class="mx-auto bg-grey-lighten-3 pa-5">
          <p class="mb-6">{{ isLogin ? 'Авторизация' : 'Регистрация'}}</p>
            <v-form fast-fail ref="form" @submit.prevent="entry">
                <v-text-field variant="outlined" hide-details clearable v-model="username" label="Логин"></v-text-field>

                <v-text-field v-if="!isLogin" class="mt-3" variant="outlined" required hide-details clearable v-model="userlastname" label="Фамилия"></v-text-field>

                <v-text-field class="mt-3" variant="outlined" hide-details type="password" clearable v-model="password" label="Пароль"></v-text-field>

                <v-text-field class="mt-3" v-if="!isLogin" hide-details type="password" clearable variant="outlined" v-model="password2" label="Повторите пароль"></v-text-field>

								<v-expand-transition>
									<div v-if="userStore.errorMassage" class="mt-3 ml-4 text-red-darken-1 text-body-2">
										{{ userStore.errorMassage }}
									</div>
								</v-expand-transition>

              <div class="mt-6">
                <v-checkbox v-model="isRemember" v-if="isLogin" color="primary" density="compact"  @click="setRemember" hide-details label="Запомнить меня"/>
                <v-btn type="submit" :loading="loadingStore.isLoading" :disabled="!isDisabledBtn" color="primary" block >{{ isLogin ? 'Войти' : 'Зарегистрироваться'}}</v-btn>
              </div>

            </v-form>
            <div class="mt-2">
							<p v-if="isLogin" class="text-body-2">Нет аккаунта? <router-link :to="{name: 'registration', query: {redirect: route.query.redirect}}">Зарегистрируйтесь</router-link></p>
							<p v-else class="text-body-2">Есть аккаунт? <router-link :to="{name: 'login', query: {redirect: route.query.redirect}}">Войти</router-link></p>
            </div>
        </v-sheet>
    </div>
</template>

<script setup>
import {ref, computed, watch} from "vue";
import {useUserStore} from "@/stores/user.js";
import {useRoute} from "vue-router";
import { mdiArrowLeft } from '@mdi/js'
import {useLoadingStore} from "@/stores/loading.js";

const userStore = useUserStore()
const loadingStore = useLoadingStore()
const route = useRoute();
const form = ref()
const username = ref('')
let isRemember = ref(true)
const userlastname = ref('')
const password = ref('')
const password2 = ref('')
let isLogin = ref(route.name === 'login')

const isDisabledBtn = computed(() => {
  if (isLogin.value) {
    return username.value?.length > 0 && password.value?.length > 0
  }
  return username.value?.length > 0 && userlastname.value?.length > 0 && password.value?.length > 0 && password.value === password2.value
})
const setRemember = () => isRemember.value = !isRemember.value
const setEntry = (newRoute) => {
  isLogin.value = newRoute === 'login'
  form.value?.reset()
	userStore.errorMassage = ''
}
watch(
    () => route.name,
     newRoute => {
       setEntry(newRoute)
    }
)
const entry = () => {
    if (!isLogin.value) {
      const body = {
        login: username.value,
        password: password.value,
        first_name: username.value,
        last_name: userlastname.value
      }
      userStore.registration(body)
    } else {
      const body = {
        login: username.value,
        password: password.value,
      }
      userStore.login(body)
    }
}


</script>
