import { navList } from '_consts';
import { Link } from 'react-router-dom';
import '_less/nav';
import { Menu, Button } from 'antd';

const { SubMenu } = Menu;
export default class Sider extends React.Component {
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
              <span>{nav.label}</span>
            </span>
          }
        >
          {this.getNav(nav.child)}
        </SubMenu>
      ) : (
        <Menu.Item key={nav.link}>
          <Link to={nav.link}>{nav.label}</Link>
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
    return (
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={() => this.toggleCollapsed} style={{ marginBottom: 16 }} />
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
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
