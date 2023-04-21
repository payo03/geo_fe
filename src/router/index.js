import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import AuthView from '../views/auth/AuthView.vue';
import com from '../store/common.js';

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainView
    }, {
        path: '/authView',
        name: 'auth',
        component: AuthView
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

    // auth 페이지 일때
    console.log(to, from);
    if ((to.path).includes('auth')) {
        // 토큰이 있을경우
        var token = com.getToken();
        if(token) {
            next();
        } else {
            next('/');
        }            
    } else {
        next();
    }
});

export default router;
