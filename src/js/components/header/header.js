import React from 'react';
import headerCss from '~/css/components/header/header.css';
import {Row, Col, Icon, Popover} from 'antd';
import HeadMenu from './head-menu';
import MobileMenu from './mobile-menu';

class Header extends React.Component {
    constructor(props) {
        super(props);
        var width = document.body.clientWidth;
        var device = "PC";
        if (width < 500) {
            device = "SmailMobile";
        }
        if (width < 768) {
            device = "Mobile";
        }
        this.state = {
            device: device,
            popoverVisible: false,
            popoverWidth:300,
            current: "home"
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.onResize);
    }

    componentWillMount() {
        window.removeEventListener("resize", this.onResize);
    }

    onResize = () => {
        var width = document.body.clientWidth;
        if (width >= 768 && this.state.device != "PC") {
            this.setState({device: "PC"});
        } else if (width > 500 && width < 768 && this.state.device != "Mobile") {
            this.setState({device: "Mobile"});
        } else if (width < 500 && this.state.device != "SmailMobile") {
            this.setState({device: "SmailMobile"});
        }
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
                    {
                        this.state.device == "PC"
                            ? <HeadMenu current={this.state.current} onClick={this.MenuItemOnClick}></HeadMenu>
                            : ""
                    }
                </Col>
            </Row>
            {
                this.state.device != "PC"
                    ? <Popover trigger="click" placement="bottomRight" content={<MobileMenu current={this.state.current} onClick={this.MenuItemOnClick} style = {{width:300}} > </MobileMenu>} visible={this.state.popoverVisible} onVisibleChange={this.handleVisibleChange}>
                            <Icon type="bars" className={headerCss.navPhoneIcon}/>
                        </Popover>
                    : ""
            }
        </header>);
    };
}

export default Header;
