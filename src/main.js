import {createApp, markRaw} from 'vue'
import {createPinia} from "pinia";
import '@/assets/styles/general.scss'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'
import router from './router.js'

const pinia = createPinia()

pinia.use(({ store }) => {
    store.$router = markRaw(router)
});

createApp(App).use(pinia).use(router).use(vuetify).mount('#app')
