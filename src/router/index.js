import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import asyncRoutes from './asyncRoutes';

Vue.use(VueRouter);

const constantRoutes = [
  {
    path: '/',
    component: Home,
    children: [],
    hidden: true,
  },
  {
    hidden: true,
    path: '/login',
    name: 'Login',
    meta: {title: '登录'},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue'),
  },
  {
    hidden: true,
    path: '*',
    name: '404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/error-page/404.vue'),
  },
];

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ( {y: 0} ),
  routes: constantRoutes,
});

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;

export {
  asyncRoutes,
  constantRoutes,
};
