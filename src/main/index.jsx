/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import { withRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Nav from '_components/nav';
import PropTypes from 'prop-types';

const Loading = () => <div>loading...</div>;
const PowerFactor = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../power-factor'),
  loading: Loading,
});

const PowerEconormy = Loadable({
  loader: () => import(/* webpackPrefetch: true */ '../power-econormy'),
  loading: Loading,
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'ssdafafasd',
    };
  }

  render() {
    const { match } = this.props;
    const { path } = match;
    const { test } = this.state;
    return (
      <div>
        <Nav />
        <Switch>
          <Route path={`${path}/power-factor`} component={PowerFactor} />
          <Route path={`${path}/power-econormy`} component={PowerEconormy} />
        </Switch>
        {test}
      </div>
    );
  }
}

Main.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(Main);
