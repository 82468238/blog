import React from 'react';

class MobileHeader extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header className={headerCss.header}>
                <Row>
                    <Col xs={24} sm={9} md={8} lg={8} xl={6}>
                        <a href="/" className={headerCss.logo}>
                            <img src={require('~/img/logo.png')}/>
                            <span>EXPRESS QUERY</span>
                        </a>
                    </Col>
                </Row>
                <Icon type="bars" className={headerCss.navPhoneIcon}/>
            </header>
        );
    }
}
