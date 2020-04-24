export const navList = [
  {
    label: '信息概览',
    link: '/',
    icon: 'icon-radio_checked',
    child: [],
  },
  {
    label: '安全统计',
    link: 'safe',
    icon: 'icon-chengchejilu',
    child: [],
  },
  {
    label: '用电优化',
    link: '',
    icon: 'icon-chengchedaka',
    child: [
      {
        label: '功率因数',
        link: '/route/power-factor',
        icon: 'icon-house',
        child: [],
      },
      {
        label: '经济运行',
        link: '/route/power-econormy',
        icon: 'icon-copy',
        child: [],
      },
    ],
  },
];

export const occupied = '';
