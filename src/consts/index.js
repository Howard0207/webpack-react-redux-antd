export const navList = [
    {
        label: '信息概览',
        link: '/factory-all/overview',
        icon: 'icon-radio_checked',
        className: 'nav__icon nav__icon--overview',
        child: [],
    },
    {
        label: '安全统计',
        link: '/factory-all/statistics',
        icon: 'icon-chengchejilu',
        className: 'nav__icon nav__icon--statistics',
        child: [],
    },
    {
        label: '用电优化',
        link: '/factory-all/optimize',
        icon: 'icon-chengchedaka',
        className: 'nav__icon nav__icon--optimize',
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
    {
        label: '能源投资',
        link: '/factory-all/invest',
        icon: 'icon-chengchedaka',
        className: 'nav__icon nav__icon--invest',
        child: [
            {
                label: '储能投资',
                link: '/factory-all/storage-invest',
                child: [],
            },
            {
                label: '光伏投资',
                link: '/factory-all/photovoltaic-invest',
                child: [],
            },
            {
                label: '分析记录',
                link: '/factory-all/analysis-record',
                child: [],
            },
        ],
    },
    {
        label: '电能质量',
        link: '/factory-all/quality',
        icon: 'icon-chengchejilu',
        className: 'nav__icon nav__icon--quality',
        child: [],
    },
];

export const occupied = '';
