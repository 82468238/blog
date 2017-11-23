import React from 'react';
import headerCss from '~/css/components/header/header.css';
import {Row, Col, Icon, Popover} from 'antd';
import HeadMenu from './head-menu';
import MobileMenu from './mobile-menu';
import MediaQuery from '../common/media-query';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popoverVisible: false,
            current: "home"
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.onResize);
    }

    componentWillMount() {
        window.removeEventListener("resize", this.onResize);
    }

    handleVisibleChange = (visible) => {
        this.setState({popoverVisible: visible});
    }

    MenuItemOnClick = (e) => {
        this.setState({current: e.key});
    }

    render() {
        console.log("render");
        return (<header className={headerCss.header}>
            <Row>
                <Col xs={24} sm={9} md={8} lg={8} xl={6}>
                    <a href="/" className={headerCss.logo}>
                        <img src={require('~/img/logo.png')}/>
                        <span>EXPRESS QUERY</span>
                    </a>
                </Col>
                <Col xs={0} sm={13} md={14} lg={14} xl={16} className={headerCss.headMenu}>
                    <MediaQuery maxWidth={123}>
                        <HeadMenu current={this.state.current} onClick={this.MenuItemOnClick}></HeadMenu>
                    </MediaQuery>
                </Col>
            </Row>
            <MediaQuery minWidth={768} maxWidth={350}>
                <Popover trigger="click" placement="bottomRight" content={<MobileMenu current={this.state.current} onClick={this.MenuItemOnClick} style = {{width:300}} > </MobileMenu>} visible={this.state.popoverVisible} onVisibleChange={this.handleVisibleChange}>
                    <Icon type="bars" className={headerCss.navPhoneIcon}/>
                </Popover>
            </MediaQuery>
            <MediaQuery minWidth={350}>
                <Popover trigger="click" placement="bottomRight" content={<MobileMenu current={this.state.current} onClick={this.MenuItemOnClick} style = {{width:280}} > </MobileMenu>} visible={this.state.popoverVisible} onVisibleChange={this.handleVisibleChange}>
                    <Icon type="bars" className={headerCss.navPhoneIcon}/>
                </Popover>
            </MediaQuery>
        </header>);
    };
}

export default Header;
