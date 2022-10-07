import SignUp from '../components/SignUp.vue';
import LogIn from '../components/LogIn.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp,
    },
    {
        path: '/login-in',
        name: 'LogIn',
        conponent: LogIn,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;