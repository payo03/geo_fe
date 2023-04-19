import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
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
    }, 
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    
    var token = com.getToken();
    console.log(to, from);
    if ((to.path).includes('auth')) {
        if (token) {
            console.log("if");
            next();
        } else {
            console.log("else");
            next('/');
        }
    } else {
        next();
    }
});

export default router;
