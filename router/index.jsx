import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import store from '../store';

const Loading = () => <div>loading...</div>;
const Home = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../src/home/index.jsx'),
  loading: Loading,
});

export default function RouterConfig() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
