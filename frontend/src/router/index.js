import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/sign-up',
        name: 'Sign-up',
        conponent: SignUp,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;