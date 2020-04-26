import { withRouter } from 'react-router-dom';
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
    const { route } = this.props;
    const { test } = this.state;
    return (
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
};

export default withRouter(Main);
