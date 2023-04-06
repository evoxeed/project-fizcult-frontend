<template>
    <v-icon :icon="mdiBookEducation" size="128"/>
    <h1 class="my-8 text-md-h2 text-h4">{{ msg }}</h1>
    <p class="text-subtitle-1">
        Скоро...
    </p>
</template>

<script setup>
import { useUserStore } from '@/stores/user.js'
import { mdiBookEducation } from '@mdi/js'

const userStore = useUserStore()
defineProps({
    msg: String,
})

</script>


