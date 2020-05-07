import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { navList } from '_consts';
import { Menu } from 'antd';
import '_less/components/nav';

const { SubMenu } = Menu;

class Sider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navMapList: navList,
    };
  }

  getNav(navMapList) {
    return navMapList.map((nav) => {
      return nav.child.length > 0 ? (
        <SubMenu
          key={nav.link}
          title={
            <span>
              <i className={`action iconfont ${nav.icon}`}></i>
              <span>{nav.label}</span>
            </span>
          }
        >
          {this.getNav(nav.child)}
        </SubMenu>
      ) : (
        <Menu.Item key={nav.link}>
          <Link to={nav.link}>
            {nav.icon && <i className={`action iconfont ${nav.icon}`}></i>}
            <span>{nav.label}</span>
          </Link>
        </Menu.Item>
      );
    });
  }

  render() {
    const { navMapList } = this.state;
    const { location, match } = this.props;
    const { pathname } = location;
    const { path } = match;
    return (
      <div className="app-nav">
        <Menu defaultSelectedKeys={[pathname]} defaultOpenKeys={[path]} mode="inline">
          {this.getNav(navMapList)}
        </Menu>
      </div>
    );
  }
}

Sider.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(Sider);
