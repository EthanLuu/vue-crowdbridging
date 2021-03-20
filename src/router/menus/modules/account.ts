import type { MenuModule } from '/@/router/types';

const menu: MenuModule = {
  orderNo: 1,
  menu: {
    name: '账户管理',
    path: '/page-demo/account',

    children: [
      {
        path: 'center',
        name: '个人中心',
      },
      {
        path: 'setting',
        name: '设置信息',
      },
    ],
  },
};
export default menu;
