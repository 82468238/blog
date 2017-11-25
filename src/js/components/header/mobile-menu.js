import React from 'react';
import {Menu} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import './mobile-head-menu.global.css';

class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "home"
        }
    }

    MenuItemOnClick = (e) => {
        this.setState({current: e.key});
    }

    render() {
        return (<div id="mobileHeaderMenu" style={this.props.style}>

            <Menu onClick={this.props.onClick} selectedKeys={[this.props.current]} mode="inline">
                <Menu.Item key="home">
                    <a href="/">首页</a>
                </Menu.Item>
                <Menu.Item key="messageBoard">
                    留言板
                </Menu.Item>
                <Menu.Item key="about">
                    关于我
                </Menu.Item>
            </Menu>
        </div>);
    }
}

export default MobileMenu;
