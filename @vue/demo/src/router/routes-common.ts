import type { RouteRecordRaw } from 'vue-router';

export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@pages/Demo'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@pages/Demo'),
  },
] as RouteRecordRaw[];
