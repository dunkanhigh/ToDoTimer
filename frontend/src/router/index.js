import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
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