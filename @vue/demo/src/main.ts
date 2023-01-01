import './assets/main.css';
import 'vuetify/styles';
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import i18next from '@vue/shared/i18next';
import stores from './stores';
import installer from './installer';
import App from './Suspenser.vue';
import Popup from './Popup.vue';
import router from './router/router-page';
// import popupRouter from './router/popup-router';

const locales = import.meta.glob('@/locales/*/index.ts');

const app = createApp(App);

const vuetify = createVuetify();

// const popup = createApp(Popup);
app.use(i18next, locales).use(stores).use(installer).use(vuetify).use(router);

router.isReady().then(() => {
  app.mount('#app');
});

// popup.use(pinia).use(popupRouter).use(installer).mount('#popup');
