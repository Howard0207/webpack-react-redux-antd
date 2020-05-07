import Loadable from 'react-loadable';

const Loading = () => <div>loading...</div>;

const Home = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../pages/page-factory/home'),
  loading: Loading,
});

const Main = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../pages/main'),
  loading: Loading,
});

const PowerFactor = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../pages/page-factory/power-factor'),
  loading: Loading,
});

const PowerEconormy = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../pages/page-factory/power-econormy'),
  loading: Loading,
});

const Echart = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../pages/page-factory/echarts'),
  loading: Loading,
});

const routes = [
  {
    path: '/factory-all',
    component: Main,
    routes: [
      {
        path: '/factory-all/power-factor',
        exact: true,
        component: PowerFactor,
      },
      {
        path: '/factory-all/power-econormy',
        exact: true,
        component: PowerEconormy,
      },
      {
        path: '/factory-all/echarts',
        exact: true,
        component: Echart,
      },
      {
        path: '*',
        component: Home,
      },
    ],
  },
  {
    path: '/factory',
    component: Main,
    routes: [
      {
        path: '/factory/power',
        exact: true,
        component: PowerFactor,
      },
      {
        path: '/factory/power-econormy',
        exact: true,
        component: PowerEconormy,
      },
      {
        path: '/factory/echarts',
        exact: true,
        component: Echart,
      },
      {
        path: '*',
        component: Home,
      },
    ],
  },
  {
    path: '*',
    component: Home,
  },
];

export default routes;
