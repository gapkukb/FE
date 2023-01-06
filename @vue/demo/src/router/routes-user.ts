import type { RouteRecordRaw } from 'vue-router';

export default [
  {
    path: '/user',
    name: 'user',
    component: () => import('@pages/Demo'),
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@pages/Demo'),
      },
    ],
  },
] as RouteRecordRaw[];
