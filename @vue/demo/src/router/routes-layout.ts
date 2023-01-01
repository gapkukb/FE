import type { RouteRecordRaw } from 'vue-router';
import Layout from '@pages/Layout';
import common from './routes-common';
import user from './routes-user';

/** 框架路由，共享头部，侧滑栏，顶部等公共部件 */

export default [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [...common, ...user],
  },
] as RouteRecordRaw[];
