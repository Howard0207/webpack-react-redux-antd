import Loadable from 'react-loadable';

const Loading = () => <div>loading...</div>;

const Home = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../src/home'),
  loading: Loading,
});

const Main = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../src/main'),
  loading: Loading,
});

const PowerFactor = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../src/power-factor'),
  loading: Loading,
});

const PowerEconormy = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../src/power-econormy'),
  loading: Loading,
});

const routes = [
  {
    path: '/',
    component: Main,
    routes: [
      {
        path: ['/power-factor'],
        exact: true,
        component: PowerFactor,
      },
      {
        path: '/power-econormy',
        exact: true,
        component: PowerEconormy,
      },
      {
        path: '*',
        component: Home,
      },
    ],
  },
];

export default routes;
