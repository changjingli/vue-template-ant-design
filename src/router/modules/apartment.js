import Home from '@/views/Home';

export default {
  path: '/',
  key: 'apartment',
  component: Home,
  meta: {icon: 'apartment', title: '组织架构'},
  children: [
    {
      path: '/organizational-list',
      key: 'organizational-list',
      meta: {title: '组织架构'},
    },
    {
      path: '/position-list',
      key: 'position-list',
      meta: {title: '职位管理'},
    },
  ],
}
