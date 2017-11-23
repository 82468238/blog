import React from 'react';
import {Menu} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import '~/css/components/header/pc-head-menu.global.css';

class PcHeadMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (<div id="pcHeadMenu">
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="1sd">
                    <a href="/">首页</a>
                </Menu.Item>
                {/* <SubMenu title={<span>更多</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                </SubMenu> */}
                <Menu.Item key="app">
                    我
                </Menu.Item>
            </Menu>

        </div>);
    }

}

export default PcHeadMenu;
