import { withRouter, Redirect, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Layout, Menu, Dropdown, Button } from 'antd';
import Nav from '_components/nav';
import PropTypes from 'prop-types';
import logo from '../../../statics/imgs/logo.png';

const { Header, Content, Sider, Footer } = Layout;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
// eslint-disable-next-line react/prefer-stateless-function
class Main extends React.Component {
  render() {
    const { route, location } = this.props;
    const { pathname } = location;
    return pathname === '/' ? (
      <Redirect to="/power-factor" />
    ) : (
      <Layout className="main">
        <Header className="header">
          <div className="header-left">
            <img src={logo} alt="logo" className="header-left-logo" />
          </div>
          <div className="header-right">
            <Link to="/factory-all" className="header-linkall">
              全部工厂
            </Link>
            <Dropdown overlay={menu} trigger={['click']} className="header-account">
              <Button className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                <i className="iconfont icon-login_user"></i>
              </Button>
            </Dropdown>
          </div>
        </Header>
        <Layout className="site-layout-background">
          <Sider className="main-sider-bg" width={200} style={{ padding: '24px 0 0' }}>
            <Nav />
          </Sider>
          <Content style={{ padding: '24px 24px 0', minHeight: 280 }}>
            <div className="page-container">{renderRoutes(route.routes)}</div>
            <Footer style={{ textAlign: 'center' }}>copyright @ 2019 清科优能</Footer>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

Main.propTypes = {
  route: PropTypes.instanceOf(renderRoutes).isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(Main);
