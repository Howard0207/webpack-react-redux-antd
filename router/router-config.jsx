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
    component: Home,
    path: '/',
    exact: true,
  },
  {
    path: '/main',
    component: Main,
    routes: [
      {
        path: '/main/power-factor',
        exact: true,
        component: PowerFactor,
      },
      {
        path: '/main/power-econormy',
        exact: true,
        component: PowerEconormy,
      },
    ],
  },
];

export default routes;
