import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import store from '../store';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const Loading = () => <div>loading...</div>;
const Home = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../src/home'),
  loading: Loading,
});

const Main = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../src/main'),
  loading: Loading,
});

const PowerEconormy = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../src/power-econormy'),
  loading: Loading,
});

export default function RouterConfig() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/route">
            <Main />
            <Switch>
              {/* <Route path={`power-factor`} component={PowerFactor} /> */}
              <Route path={`power-econormy`} component={PowerEconormy} />
            </Switch>
          </Route>
          <Route exact path="/test">
            <PowerEconormy />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
