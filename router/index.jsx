import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import store from '../store';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '_less/reset.less';
import routes from './router-config';

export default function RouterConfig() {
  return (
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
  );
}
