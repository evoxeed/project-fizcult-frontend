<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<h1>profile</h1>
				<v-card>
					<pre>
						{{userStore.userData}}
					</pre>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import {useUserStore} from "@/stores/user.js";
import {useRouter} from "vue-router";


const router = useRouter();
const userStore = useUserStore()

const logout = () => {
	userStore.setUserData(null)
	userStore.setUserToken(null)
	router.push({name: 'home'})
}
</script>


<style scoped>

</style>

