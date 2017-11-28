import React from 'react';
import {Card,Row,Col,Icon} from 'antd';
import ContentCardGlobalCss from './content-card.global.css';
import ContentCardCss from './content-card.css';
import propTypes from 'prop-types';

class ContentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    static defaultProps = {
        type: "normal",
        loading: true
    }

    static propTypes = {
        type: propTypes.oneOf(['normal','simple','manyPhoto']),
        title: propTypes.string.isRequired,
        content: propTypes.string.isRequired,
        loading: propTypes.bool,
        tags: propTypes.shape({
            id: propTypes.number,
            name: propTypes.string
        }).isRequired,
        viewStatisNum: propTypes.number,
        viewCommentNum: propTypes.number,
        viewStarNum: propTypes.number
    }

    getTags = () => {
        var tags = this.props.tags;
        var result = [];
        if(tags != null){
            // for(var i = 0, len = tags.length; i < len; i++){
            //     result.push(<li key={i} className={ContentCardCss.tag}><Icon type="tag" style={{marginRight:'2px'}} />{tags[i].name}</li>);
            // }
            result.push(<li key={1} className={ContentCardCss.tag}><Icon type="tag" style={{marginRight:'2px'}} />{tags.name}</li>);
        }
        return result;
    }

    render() {
        return (<div className={ContentCardCss.ContentCard}>
            <Card loading={this.props.loading} bordered={false} noHovering={true}>
                <div className={ContentCardCss.title}>{this.props.title}</div>
                <div className={ContentCardCss.content}>
                    <Row style={{height:'100%'}}>
                        <Col xs={24} sm={16} md={17} lg={18} xl={20} style={{height:'100%'}}>
                            <div className={ContentCardCss.contentText}>{this.props.content}</div>
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
                        {this.getTags()}
                    </ul>
                    <div className={ContentCardCss.statis}>
                        {this.props.viewStatisNum != null ? <div className={ContentCardCss.viewStatis}><Icon type="eye" style={{marginRight:'2px',color:'#999'}} /><div className={ContentCardCss.viewStatisNum}>{this.props.viewStatisNum}</div></div> : ""}
                        {this.props.viewCommentNum != null ? <div className={ContentCardCss.commentStatis}><Icon type="mail" style={{marginRight:'2px',color:'#999'}} /><div className={ContentCardCss.viewStatisNum}>{this.props.viewCommentNum}</div></div> : ""}
                        {this.props.viewStarNum != null ? <div className={ContentCardCss.starStatis}><Icon type="heart" style={{marginRight:'2px',color:'#999'}} /><div className={ContentCardCss.viewStatisNum}>{this.props.viewStarNum}</div></div> : ""}
                    </div>

                </div>
            </Card>
        </div>);
    }
}

export default ContentCard;
