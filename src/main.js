import { createApp } from 'vue';
import { store } from './store/store.js';
import router from './router/index.js';
import App from './App.vue';

const app = createApp(App).use(router).use(store);

app.mount('#app');