import Home from '@/views/Home';

export default {
  path: '/',
  key: 'finance',
  component: Home,
  meta: {
    icon: 'pay-circle',
    title: '财务管理',
  },
  children: [
    {
      path: '/project-info-list',
      key: 'project-info-list',
      meta: {title: '项目信息'},
    },
    {
      path: '/choice-info-list',
      key: 'choice-info-list',
      meta: {title: '机会信息'},
    },
    {
      path: '/calculation-of-net-cost',
      key: 'calculation-of-net-cost',
      meta: {title: '成本核算'},
    },
  ],
};
