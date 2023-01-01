import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@pages/Layout';
import routesLayout from './routes-layout';
import routesLanding from './routes-landing';
import store from '@stores';
import { useHead } from '@vueuse/head';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: routesLayout,
    },
    {
      path: '/landing',
      name: 'landing',
      children: routesLanding,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.user.accessable) {
    return next({ name: 'login' });
  }

  if ((to.name === 'login' || to.name === 'register') && store.user.accessable) {
    return next(from.path);
  }

  next();
});

router.afterEach((to) => {
  useHead({ title: to.meta.title || import.meta.env.VITE_APP_TITLE });
});

export default router;
