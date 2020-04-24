import { withRouter, Route, Switch, useRouteMatch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Nav from '_components/nav';
// import PowerFactor from '../power-factor';
// import PowerEconormy from '../power-econormy';
const Loading = () => <div>loading...</div>;
const PowerFactor = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../power-factor'),
  loading: Loading,
});

const PowerEconormy = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../power-econormy'),
  loading: Loading,
});

// const { path, url } = useRouteMatch();
// // eslint-disable-next-line no-console
// console.log(path, url);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'ssdafafasd',
    };
  }

  render() {
    const { path, url } = useRouteMatch();
    console.log(path, url);
    const { test } = this.state;
    // const path = '/route';
    return (
      <div>
        <Nav />
        {test}
      </div>
    );
  }
}

export default withRouter(Main);
