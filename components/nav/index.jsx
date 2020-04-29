import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { navList } from '_consts';
import { Button, Menu } from 'antd';
import '_less/nav';

const { SubMenu } = Menu;
class Sider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
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

  toggleCollapsed() {
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed });
  }

  render() {
    const { collapsed, navMapList } = this.state;
    const { location, match } = this.props;
    const { pathname } = location;
    const { path } = match;
    console.log(collapsed);
    return (
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={() => this.toggleCollapsed()} style={{ marginBottom: 16 }}>
          12313
        </Button>
        <Menu
          defaultSelectedKeys={[pathname]}
          defaultOpenKeys={[path]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
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
