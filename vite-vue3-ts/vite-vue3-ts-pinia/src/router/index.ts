import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/prop',
    name: 'Prop',
    meta: {
      title: '传参',
      keepAlive: true,
    },
    component: () => import('@/pages/prop.vue'),
  },
  {
    path: '/axios',
    name: 'Axios',
    meta: {
      title: 'axios请求',
      keepAlive: true,
    },
    component: () => import('@/components/axios.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
