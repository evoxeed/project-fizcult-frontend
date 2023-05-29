<template>
	<v-app>
		<Header/>
		<v-main class="bg-grey-lighten-3">
			<router-view v-slot="{ Component, route }">
				<v-fade-transition mode="out-in">
					<div :key="route.path">
						<component :is="Component"></component>
					</div>
				</v-fade-transition>
			</router-view>
		</v-main>
		<notif/>
	</v-app>
</template>

<script setup>
import notif from "@/components/Notif.vue";
import Header from "@/components/Header.vue";
</script>
