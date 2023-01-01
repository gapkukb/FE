import { useUserStore } from '@/stores/user';
import { createRouter, createMemoryHistory } from 'vue-router';

let user: ReturnType<typeof useUserStore>;

function getPath() {
  console.log(window.location.hash);

  return window.location.hash.replace('#', '/');
}

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@pages/AboutView.vue'),
    },
  ],
});

window.addEventListener(
  'hashchange',
  () => {
    router.push(getPath());
  },
  false
);

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !user.accessable) {
    next('/login');
  } else {
    next();
  }
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;

setTimeout(() => {
  router.push(getPath());
  user = useUserStore();
});
