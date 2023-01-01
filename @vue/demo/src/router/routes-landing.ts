import type { RouteRecordRaw } from 'vue-router';

/** 落地页路由，不共享页面的头部等公共组件 */
export default [
  {
    path: 'seo',
    name: 'seo',
    component: () => import('@pages/Demo'),
  },
] as RouteRecordRaw[];
