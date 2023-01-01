import './assets/main.css';
// import 'vuetify/styles';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import i18next from '@vue/shared/i18next';
import installer from './installer';
import App from './Suspenser.vue';
import Popup from './Popup.vue';
import router from './router';
import popupRouter from './router/popup-router';

const locales = import.meta.glob('@/locales/*/index.ts');

const app = createApp(App);
const pinia = createPinia();

const vuetify = createVuetify();

const popup = createApp(Popup);
app.use(i18next, locales).use(pinia).use(router).use(installer).use(vuetify).mount('#app');

popup.use(pinia).use(popupRouter).use(installer).mount('#popup');
