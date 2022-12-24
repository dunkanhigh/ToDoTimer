import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue'
// import App from '../App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    // {
    //     path: '',
    //     name: 'App',
    //     component: App
    // },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;