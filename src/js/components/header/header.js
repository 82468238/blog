import React from 'react';
import headerCss from './header.css';
import {Row, Col, Icon, Popover} from 'antd';
import HeadMenu from './head-menu';
import MobileMenu from './mobile-menu';
import MediaSensor from '../common/media-sensor';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popoverVisible: false,
            current: "home",
            navPhoneIconHover: false
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.onResize);
    }

    componentWillMount() {
        window.removeEventListener("resize", this.onResize);
    }

    handleVisibleChange = (visible) => {
        console.log("navPhoneIconOnClick");
        this.setState({
            popoverVisible: visible,
            navPhoneIconHover: !this.state.navPhoneIconHover
        });
    }

    MenuItemOnClick = (e) => {
        this.setState({
            current: e.key
        });
    }


    render() {
        console.log("render");
        return (<header className={headerCss.header}>
            <Row>
                <Col xs={24} sm={9} md={8} lg={8} xl={6}>
                    <a href="/" className={headerCss.logo}>
                        <img src={require('~/img/IMG_0061.jpg')}/>
                        <span>我只会写Bug</span>
                    </a>
                </Col>
                <MediaSensor maxWidth={768}>
                    <Col xs={0} sm={12} md={13} lg={14} xl={16} className={headerCss.headMenu}>
                        <HeadMenu current={this.state.current} onClick={this.MenuItemOnClick}></HeadMenu>
                    </Col>
                    <Col xs={0} sm={3} md={3} lg={2} xl={2}>
                        <a target="_blank" className={headerCss.githubIcon} href="https://github.com/82468238/blog"><Icon type="github" style={{ fontSize: 14}} /> Star</a>
                    </Col>
                </MediaSensor>
            </Row>
            <MediaSensor minWidth={768} maxWidth={350}>
                <Popover trigger="click" placement="bottomRight" content={<MobileMenu current={this.state.current} onClick={this.MenuItemOnClick} style = {{width:300}} > </MobileMenu>} visible={this.state.popoverVisible} onVisibleChange={this.handleVisibleChange}>
                    <div className={headerCss.navPhoneIcon + (this.state.navPhoneIconHover ? " " + headerCss.hover : "")}></div>
                </Popover>
            </MediaSensor>
            <MediaSensor minWidth={350}>
                <Popover trigger="click" placement="bottomRight" content={<MobileMenu current={this.state.current} onClick={this.MenuItemOnClick} style = {{width:280}} > </MobileMenu>} visible={this.state.popoverVisible} onVisibleChange={this.handleVisibleChange}>
                    <div className={headerCss.navPhoneIcon + (this.state.navPhoneIconHover ? " " + headerCss.hover : "")}></div>
                </Popover>
            </MediaSensor>
        </header>);
    };
}

export default Header;
