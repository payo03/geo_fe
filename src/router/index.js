import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import SampleVue from '../views/SampleVue.vue';
import com from '../store/common.js';

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainView
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

router.beforeEach((to, from, next) => {

    if ((to.path).includes('auth')) {
    // if (true) {
        var token = com.getToken();
        if (token)
            next();
        else
            next('/');
    } else {
        next();
    }
});

export default router;
