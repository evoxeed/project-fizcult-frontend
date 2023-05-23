<template>
	<v-container :class="$vuetify.display.smAndUp ? 'mt-5' : 'mt-0'">
		<h2 class="mb-5">Профиль учащегося</h2>
		<v-row v-if="userStore.userData">
			<v-col cols="12" sm="6">
				<v-card variant="flat">
					<v-card-title>Общая информация</v-card-title>
					<div class="d-flex align-start">
						<div class="profile__row">
							<v-card-item subtitle="Имя">
								{{ userStore.userData.first_name }}
							</v-card-item>
							<v-card-item subtitle="Фамилия">
								{{ userStore.userData.last_name }}
							</v-card-item>
							<v-card-item subtitle="Институт">
								ИМИТиФ
							</v-card-item>
						</div>
						<div class="profile__row">
							<v-card-item subtitle="Курс">
								2
							</v-card-item>
						</div>
					</div>
				</v-card>
			</v-col>
			<v-col cols="12" sm="6">
				<v-card variant="flat">
					<v-card-title>Базовые характеристики</v-card-title>
					<div class="d-flex align-start">
						<div class="profile__row">
							<v-card-item subtitle="Специализация">
								Волейбол
							</v-card-item>
							<v-card-item subtitle="Тип энергообеспечения">
								Средний
							</v-card-item>
							<v-card-item subtitle="Физические качество">
								Выносливость
							</v-card-item>
						</div>
					</div>
				</v-card>
			</v-col>
		</v-row>
		<v-dialog
				v-model="dialog"
				persistent
				no-click-animation
				transition="fade"
				eager
				width="auto"
		>
			<template v-slot:activator="{ props }">
				<v-btn class="mt-5" v-bind="props" :block="$vuetify.display.xs" color="red-darken-2">
					Выйти из профиля
				</v-btn>
			</template>
			<v-card max-width="400" width="100%" flat>
				<v-card-title class="text-h5">
					Подтверждение
				</v-card-title>
				<v-card-text>Уверены что хотите выйти?</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
							variant="text"
							@click="dialog = false"
					>
						Отмена
					</v-btn>
					<v-btn
							color="red-darken-2"
							variant="elevated"
							@click="logout"
					>
						Выйти
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>

	</v-container>
</template>

<script setup>
import {useUserStore} from "@/stores/user.js";
import {useRouter} from "vue-router";
import {ref} from "vue";
import {useNotifStore} from "@/stores/notif.js";



const router = useRouter();
const userStore = useUserStore()
const dialog = ref(false)
const notifStore = useNotifStore()


const logout = () => {
	userStore.setUserData(null)
	userStore.setUserToken(null)
	dialog.value = false
	notifStore.createCustomNotif('Выход выполнен', true, 'success')
	router.push({name: 'home'})
}
</script>


<style scoped>
.profile__row {
	min-width: 200px;
}
</style>

