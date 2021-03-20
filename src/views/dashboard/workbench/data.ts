export const wokbProd = [
  {
    amount: '130',
    type: '订单总数',
  },
  {
    amount: '23',
    type: '发布中',
  },
  {
    amount: '80',
    type: '进行中',
  },
  {
    amount: '27',
    type: '已完成',
  },
];

export const todoList = (() => {
  const ret: any[] = [];
  for (let index = 0; index < 3; index++) {
    ret.push({
      id: index,
      sbmter: 'Tom',
      sbmtTime: new Date().toLocaleString(),
      title: '译文审批',
      memo: '',
    });
  }
  return ret;
})();
export const newList = (() => {
  const ret: any[] = [];
  for (let index = 0; index < 3; index++) {
    ret.push({
      id: index,
      sender: 'Jerry',
      sendTime: new Date().toLocaleString(),
      title: '代码',
      memo: '翻译任务',
      cnteId: `c${index}`,
      cnteStas: 'opened',
      cnteRepo: index,
    });
  }
  return ret;
})();
