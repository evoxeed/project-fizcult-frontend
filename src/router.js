import {createRouter, createWebHistory} from 'vue-router';
import login from "@/components/Login.vue";
import HelloWorld from "@/components/HelloWorld.vue";

const routes = [
    { path: '/login', component: login, name: 'login' },
    { path: '/registration', component: login, name: 'registration' },
    { path: '/nw', component: HelloWorld, name: 'test'},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
