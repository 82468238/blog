import React from 'react';
import {Menu} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import './head-menu.global.css';

class HeadMenu extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (<div id="headMenu">
            <Menu onClick={this.props.onClick} selectedKeys={[this.props.current]} mode="horizontal">
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

export default HeadMenu;
