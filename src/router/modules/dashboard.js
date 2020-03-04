import Home from '@/views/Home';

export default {
  path: '/',
  key: 'dashboard',
  component: Home,
  meta: {icon: 'dashboard', title: '工时管理'},
  children: [
    {
      path: '/report-work-list',
      key: 'report-work-list',
      meta: {title: '工时信息'},
    },
    {
      path: '/work-time-statistics',
      key: 'work-time-statistics',
      meta: {title: '工时统计'},
    },
    {
      path: '/time-sheet-message',
      key: 'time-sheet-message',
      meta: {title: '日报信息'},
    },
  ],
};
