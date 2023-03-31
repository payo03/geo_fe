import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import SampleVue from '../views/SampleVue.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    }, {
        path: '/loginView',
        name: 'login',
        component: LoginView
    }, {
        path: '/registerView',
        name: 'register',
        component: RegisterView
    }, {
        path: '/samplevue',
        name: 'sampleVue',
        component: SampleVue
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
