import React from 'react';
import {Card,Row,Col,Icon} from 'antd';
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
        setTimeout(() => {
            this.setState({loading: false});
        }, 500);
        return (<div className={ContentCardCss.ContentCard}>
            <Card loading={this.state.loading} bordered={false} noHovering={true}>
                <div className={ContentCardCss.title}>{this.props.title}</div>
                <div className={ContentCardCss.content}>
                    <Row style={{height:'100%'}}>
                        <Col xs={24} sm={16} md={17} lg={18} xl={20} style={{height:'100%'}}>
                            <div className={ContentCardCss.contentText}>这里是内容</div>
                        </Col>
                        <Col xs={24} sm={8} md={7} lg={6} xl={6} style={{height:'100%'}}>
                            <div className={ContentCardCss.contentImg}>
                                <img src={require('~/img/bg.jpg')}></img>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={ContentCardCss.meta}>
                    <ul className={ContentCardCss.tags}>
                        <li className={ContentCardCss.tag}><Icon type="tag" style={{marginRight:'2px'}} />有些话只能在这里说</li>
                        <li className={ContentCardCss.tag}><Icon type="tag" style={{marginRight:'2px'}} />青春</li>
                    </ul>
                    <div className={ContentCardCss.statis}>
                        <div className={ContentCardCss.viewStatis}><Icon type="eye" style={{marginRight:'2px',color:'#999'}} /><div className={ContentCardCss.viewStatisNum}>1358</div></div>
                        <div className={ContentCardCss.starStatis}><Icon type="heart" style={{marginRight:'2px',color:'#999'}} /><div className={ContentCardCss.viewStatisNum}>1358</div></div>
                    </div>

                </div>
            </Card>
        </div>);
    }
}

export default ContentCard;
