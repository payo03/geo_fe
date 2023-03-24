import { createApp } from 'vue';
import { store } from './store/store.js';
import router from './router/index.js';
import App from './App.vue';

import '../src/assets/css/bootstrap.min.css';
import '../src/assets/vendor/font-awesome/css/font-awesome.min.css';
import '../src/assets/vendor/linearicons/style.css';
import '../src/assets/css/main.css';
import '../src/assets/css/demo.css';

//import klorofil from  '../src/assets/scripts/klorofil-common.js';

const app = createApp(App).use(router).use(store);

app.mount('#app');