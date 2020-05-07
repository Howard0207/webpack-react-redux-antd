export const navList = [
  {
    label: '信息概览',
    link: '/factory-all',
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
    link: '/factory-all',
    icon: 'icon-chengchedaka',
    child: [
      {
        label: '功率因数',
        link: '/factory-all/power-factor',
        child: [],
      },
      {
        label: '经济运行',
        link: '/factory-all/power-econormy',
        child: [],
      },
      {
        label: 'echarts图表',
        link: '/factory-all/echarts',
        child: [],
      },
    ],
  },
];

export const occupied = '';
