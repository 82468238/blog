import React from 'react';
import {Menu} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import '~/css/components/header/head-menu.global.css';

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
                {/* <SubMenu title={<span>更多</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                </SubMenu> */
                }
                <Menu.Item key="note">
                    笔记
                </Menu.Item>
                <Menu.Item key="photo">
                    相册
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
