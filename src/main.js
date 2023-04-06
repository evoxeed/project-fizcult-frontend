import { createApp } from 'vue'
import {createPinia} from "pinia";
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'

const pinia = createPinia()


createApp(App).use(pinia).use(vuetify).mount('#app')
