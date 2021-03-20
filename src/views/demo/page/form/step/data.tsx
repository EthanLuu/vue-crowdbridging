import { FormSchema } from '/@/components/Form';

const basicOptions: LabelValueOptions = [
  {
    label: '不指定',
    value: '0',
  },
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
];

export const step1Schemas: FormSchema[] = [
  {
    field: 'money',
    component: 'Input',
    label: '订单总金额',
    defaultValue: '1000',
    required: true,
    renderComponentContent: () => {
      return {
        prefix: () => '￥',
      };
    },
  },
  {
    field: 'textLanguage',
    component: 'Input',
    label: '文本语言',
    defaultValue: '英语',
    required: true,
  },
  {
    field: 'targetLanguage',
    component: 'Input',
    label: '目标语言',
    defaultValue: '中文',
    required: true,
  },
  {
    field: 'userLevel',
    component: 'Select',
    componentProps: {
      options: basicOptions,
    },
    label: '译员等级',
    required: true,
  },
];

export const step2Schemas: FormSchema[] = [
  {
    field: 'account',
    component: 'Select',
    label: '付款账户',
    required: true,
    defaultValue: '1',
    componentProps: {
      options: [
        {
          label: 'cb1@gmail.com',
          value: '1',
        },
        {
          label: 'cb2@gmail.com',
          value: '2',
        },
      ],
    },
  },
  {
    field: 'pwd',
    component: 'InputPassword',
    label: '支付密码',
    required: true,
    defaultValue: '123456',
  },
];
