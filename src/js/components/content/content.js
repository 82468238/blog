import React from 'react';
import {Row, Col} from 'antd';
import ContentCard from './content-card';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (<div style={{marginTop:'30px'}}>
            <Row>
                <Col xs={23} sm={23} md={22} lg={22} xl={20} style={{margin:'0px auto',float:'none'}}>
                    <ContentCard title="测试"></ContentCard>
                    <ContentCard title="测试"></ContentCard>
                </Col>
            </Row>
        </div>);
    }
}

export default Content;
