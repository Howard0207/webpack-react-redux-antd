import Loadable from 'react-loadable';

const Loading = () => <div>loading...</div>;

const Home = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../page-factory/home'),
  loading: Loading,
});

const Main = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../page-factory/main'),
  loading: Loading,
});

const PowerFactor = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../page-factory/power-factor'),
  loading: Loading,
});

const PowerEconormy = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../page-factory/power-econormy'),
  loading: Loading,
});

const Echart = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../page-factory/echarts'),
  loading: Loading,
});

const FactoryAll = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../page-factory-all/main'),
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
    component: FactoryAll,
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
];

export default routes;
