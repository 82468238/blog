import React from 'react';
import {Card,Row,Col} from 'antd';
import ContentCardGlobalCss from './content-card.global.css';
import ContentCardCss from './content-card.css';

class ContentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }


    render() {
        // setTimeout(() => {
        //     this.setState({loading: false});
        // }, 2000);
        return (<div>
            <Card loading={this.state.loading} bordered={false} noHovering={true}>
                <div className={ContentCardCss.title}>{this.props.title}</div>
                <div className={ContentCardCss.content}>
                    <Row>
                        <Col xs={24} sm={16} md={17} lg={18} xl={20}>
                            <div className={ContentCardCss.contentText}>这里是内容</div>
                        </Col>
                        <Col xs={24} sm={8} md={7} lg={6} xl={6}>
                            <div className={ContentCardCss.contentImg}>这里是图片</div>
                        </Col>
                    </Row>
                </div>
                <div className={ContentCardCss.meta}></div>
            </Card>
        </div>);
    }
}

export default ContentCard;
