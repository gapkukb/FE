import type { App } from 'vue';
import { createPinia } from 'pinia';
import { useAppStore } from './app';
import { useLocaleStore } from './locale';
import { usePwaStore } from './pwa';
import { useUserStore } from './user';

export const pinia = createPinia();

const stores = {
  app: useAppStore(pinia),
  locale: useLocaleStore(pinia),
  pwa: usePwaStore(pinia),
  user: useUserStore(pinia),
};

export function store(app: App) {
  app.use(pinia);
  app.config.globalProperties.$store = stores;
}

export default stores;
