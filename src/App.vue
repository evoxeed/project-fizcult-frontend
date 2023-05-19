<template>
	<v-app>
		<Header/>
		<v-main class="bg-grey-lighten-3">
			<router-view/>
		</v-main>
		<notif/>
	</v-app>
</template>

<script setup>
import notif from "@/components/Notif.vue";
import Header from "@/components/Header.vue";
</script>
