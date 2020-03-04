import Home from '@/views/Home';

export default {
  path: '/',
  key: 'tool',
  component: Home,
  meta: {icon: 'tool', title: '系统设置'},
  children: [
    {
      path: '/user-list',
      key: 'user-list',
      meta: {
        title: '用户管理',
      },
    },
    {
      path: '/system-role',
      key: 'system-role',
      meta: {
        title: '角色管理',
      },
    },
    {
      path: '/system-authority',
      key: 'system-authority',
      meta: {
        title: '权限管理',
      },
    },
    {
      path: '/system-operation-log-list',
      key: 'system-operation-log-list',
      meta: {
        title: '日志管理',
      },
    },
    {
      path: '/system-operation-log-profitrate',
      key: 'system-operation-log-profitrate',
      meta: {
        title: '基准利润率}设置',
      },
    },
    {
      path: '/system-operation-log-positionunitprice',
      key: 'system-operation-log-positionunitprice',
      meta: {title: '职位单价设}置'},
    },
    {
      path: '/fixedAssets-list',
      key: 'fixedAssets-list',
      meta: {
        title: '固定资产',
      },
    },
    {
      path: '/departmentLable-list',
      key: 'departmentLable-list',
      meta: {
        title: '部门标签',
      },
    },
    {
      path: '/company-list',
      key: 'company-list',
      meta: {
        title: '公司管理',
      },
    },
  ],
};
