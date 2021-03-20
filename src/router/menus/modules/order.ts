import type { MenuModule } from '/@/router/types';

const menu: MenuModule = {
  orderNo: 2,
  menu: {
    name: '订单管理',
    path: '/page-demo',
    children: [
      {
        path: 'form/step',
        name: '发布订单',
      },
      {
        path: 'desc/high',
        name: '订单详情',
      },
      {
        path: 'result',
        name: '订单结果',

        children: [
          {
            path: 'success',
            name: '成功订单',
          },
          {
            path: 'fail',
            name: '失败订单',
          },
        ],
      },
      {
        path: 'list/basic',
        name: '订单列表',
      },
    ],
  },
};
export default menu;
