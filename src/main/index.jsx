import { withRouter, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Nav from '_components/nav';
import PropTypes from 'prop-types';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'ssdafafasd',
    };
  }

  render() {
    const { route, location } = this.props;
    const { test } = this.state;
    const { pathname } = location;
    return pathname === '/main' ? (
      <Redirect to="/main/power-factor" />
    ) : (
      <div>
        <Nav />
        {renderRoutes(route.routes)}
        {test}
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.instanceOf(renderRoutes).isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(Main);
