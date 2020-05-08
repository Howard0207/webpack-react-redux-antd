import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { navList } from '_consts';
import { Menu } from 'antd';
import '_less/components/nav';

const { SubMenu } = Menu;
/**
 * 返回folder list方法
 * @param {Type: Array, desc: menu菜单数据 } list
 * @return {Type: Array, desc: 存在二级菜单的link一维数组 }
 */
const getRootSubmenuKeys = (list) => {
    const rootSubmenuKeyList = [];
    list.forEach((item) => {
        if (item.child.length > 0) {
            rootSubmenuKeyList.push(item.link);
        }
    });
    return rootSubmenuKeyList;
};
class Sider extends React.Component {
    constructor(props) {
        super(props);
        const { match } = this.props;
        const { path } = match;
        const rootSubmenuKeys = getRootSubmenuKeys(navList);
        this.state = {
            navMapList: navList,
            openKeys: [path],
            rootSubmenuKeys,
        };
    }

    onOpenChange = (openKeyList) => {
        const { openKeys, rootSubmenuKeys } = this.state;
        const latestOpenKey = openKeyList.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys: openKeyList });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    getNav = (navMapList) => {
        return navMapList.map((nav) => {
            return nav.child.length > 0 ? (
                <SubMenu
                    key={nav.link}
                    title={
                        <span>
                            <i className={nav.className}></i>
                            <span className="nav__label">{nav.label}</span>
                        </span>
                    }
                >
                    {this.getNav(nav.child)}
                </SubMenu>
            ) : (
                <Menu.Item key={nav.link}>
                    <Link to={nav.link}>
                        {nav.className && <i className={nav.className}></i>}
                        <span className="nav__label">{nav.label}</span>
                    </Link>
                </Menu.Item>
            );
        });
    };

    render() {
        const { navMapList, openKeys } = this.state;
        const { location, match } = this.props;
        const { pathname } = location;
        const { path } = match;
        console.log(match, openKeys, pathname);
        return (
            <div className="nav">
                <Menu
                    defaultSelectedKeys={[pathname]}
                    defaultOpenKeys={[path]}
                    openKeys={openKeys}
                    onOpenChange={this.onOpenChange}
                    mode="inline"
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
