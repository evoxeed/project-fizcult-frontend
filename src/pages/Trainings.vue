<template>
	<router-view v-slot="{ Component, route }">
		<v-fade-transition mode="out-in">
			<div :key="route.path">
				<component :is="Component"></component>
			</div>
		</v-fade-transition>
	</router-view>
</template>
