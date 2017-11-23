import React from 'react';
import headerCss from '~/css/components/header/pc-header.css';
import {Row, Col, Icon} from 'antd';
import PcHeadMenu from './pc-head-menu';


class PcHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "top"
        };
    }

    MenuItemOnClick = (e) => {
        this.setState({current: e.key});
    }

    render() {
        return (<header className={headerCss.header}>
            <Row>
                <Col xs={24} sm={9} md={8} lg={8} xl={6}>
                    <a href="/" className={headerCss.logo}>
                        <img src={require('~/img/logo.png')}/>
                        <span>EXPRESS QUERY</span>
                    </a>
                </Col>
                <Col xs={0} sm={13} md={14} lg={14} xl={16} className={headerCss.headMenu}>
                    <PcHeadMenu></PcHeadMenu>
                </Col>
            </Row>
            <Icon type="bars" className={headerCss.navPhoneIcon}/>
        </header>);
    };
}

export default PcHeader;
