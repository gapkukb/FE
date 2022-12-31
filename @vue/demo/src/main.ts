import { createApp } from 'vue';
import { createPinia } from 'pinia';
import installer from './installer';

import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

app.use(router).use(createPinia()).use(installer).mount('#app');

import.meta.env.VITE_APP_TITLE;
