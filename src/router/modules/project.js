import Home from '@/views/Home';

export default {
  path: '/',
  key: 'project',
  component: Home,
  meta: {
    icon: 'project',
    title: '项目管理',
  },
  children: [
    {
      key: 'project-list',
      path: '/project-list',
      component: () => import(/* webpackChunkName: "project-list" */ '@/views/project/project-list.vue'),
      meta: {
        title: '项目管理',
      },
    },
    {
      path: '/choices-list',
      key: 'choices-list',
      meta: {
        title: '机会管理',
      },
    },
    {
      path: '/project-tree-list',
      key: 'project-tree-list',
      meta: {
        title: '项目总览',
      },
    },
  ],
};
