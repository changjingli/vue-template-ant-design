import Home from '@/views/Home';

export default {
  path: '/',
  key: 'user',
  component: Home,
  meta: {icon: 'user', title: '外部管理'},
  children: [
    {
      path: '/targetManager-list',
      key: 'targetManager-list',
      meta: {title: '客户管理'},
    },
    {
      path: '/subcontract_manager_list',
      key: 'subcontract_manager_list',
      meta: {
        title: '供应商管理',
      },
    },
  ],
};
