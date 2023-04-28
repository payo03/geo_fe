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

    var token = localStorage.getItem('accessToken');
    if ((to.path).includes('auth')) {   // auth 페이지 일때
        if(token) {                     // 토큰이 있을경우
            next();
        } else {
            next('/');
        }            
    } else if(to.path == '/') {         // login 하였을때 home화면 link시
        if(token) {                     // 토큰이 있을경우
            next('/authView')
        } else {
            next();
        }        
    } else {
        next();
    }

});

export default router;
