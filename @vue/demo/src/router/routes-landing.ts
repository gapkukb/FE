import type { RouteRecordRaw } from 'vue-router';

/** 落地页路由，不共享页面的头部等公共组件 */
export default [
  {
    path: 'new-year',
    name: 'new year',
    component: () => import('@pages/_landing/NewYear'),
  },
] as RouteRecordRaw[];
