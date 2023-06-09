import {createRouter, createWebHistory} from 'vue-router';
import login from "@/components/Login.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Home from "@/pages/Home.vue";
import {useNotifStore} from "@/stores/notif.js";
import trainings from "@/pages/Trainings.vue";
import profile from "@/pages/Profile.vue";
import LessonPage from "@/pages/LessonPage.vue";
import SkillsItems from "@/components/SkillsItems.vue";
import {useTrainingStore} from "@/stores/training.js";

const isLoggedUser = (to, from, next) => {
    const notifStore = useNotifStore()
    if (localStorage.getItem("userToken")) {
        next();
        return;
    }

    notifStore.createCustomNotif('Для продолжения работы необходимо авторизоваться', true)
    next({name: 'login', query: {redirect: to.path}});
};

const haveDataLesson = (to, from, next) => {
    const trainingStore = useTrainingStore()

    if (trainingStore.levelId !== to.params.skill) {
        trainingStore.level(to.params.skill)
    }

    next();
};

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/login',
        component: login,
        name: 'login'
    },
    {
        path: '/registration',
        component: login,
        name: 'registration'
    },
    {
        path: '/trainings',
        component: trainings,
        beforeEnter: isLoggedUser,
        children: [
            {
                path: '',
                component: SkillsItems,
                name: 'trainings',
            },
            {
                path: ':skill',
                component: LessonPage,
                name: 'lessonPage',
                beforeEnter: haveDataLesson,
            }
        ]
    },
    {
        path: '/profile',
        component: profile,
        name: 'profile',
        beforeEnter: isLoggedUser
    },
    {
        path: '/nw',
        component: HelloWorld,
        name: 'test',
        beforeEnter: isLoggedUser
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
