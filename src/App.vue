<template>
	<v-app>
		<Header/>
		<div class="position-relative">
			<v-progress-linear
					:active="loadingStore.isLoading"
					:indeterminate="loadingStore.isLoading"
					absolute
					color="primary"
			></v-progress-linear>
		</div>
		<v-main class="bg-grey-lighten-3">
			<router-view/>
		</v-main>
		<notif/>
	</v-app>
</template>

<script setup>
import notif from "@/components/Notif.vue";
import Header from "@/components/Header.vue";
import {useLoadingStore} from "@/stores/loading.js";

const loadingStore = useLoadingStore()
</script>
