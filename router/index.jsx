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

export default function RouterConfig() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/main" component={Main} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
