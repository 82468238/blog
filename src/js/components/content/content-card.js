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
        // type: propTypes.oneOf(['normal','mood']),
        type: propTypes.oneOf(['normal']),
        title: function(props, propName, componentName){
            if(props.type == "normal" && props.title == null){
                return new Error("The title must not be empty when the type is normal.");
            }
        },
        content: propTypes.string.isRequired,
        //images: props.type == "normal" ? propTypes.string : propTypes.arrayOf(propTypes.string),
        images: function(props, propName, componentName){
            if(props.images != null){
                if(props.type == "normal" && typeof props.images !== "string"){
                    return new Error("When type is normal, images can only be string");
                }else if(props.type == "mood" && typeof props.images !== "string"){
                    if(Array.isArray(props.images)){
                        for(var i = 0, len = props.images.length; i < len; i++){
                            if(typeof props.images[i] !== "string"){
                                return new Error("When type is mood, the images array can only be string");
                            }
                        }
                    }else{
                        return new Error("When type is mood, images can only be string or array");
                    }
                }
            }
        },
        loading: propTypes.bool,
        tags: propTypes.arrayOf(propTypes.shape({
            id: propTypes.number,
            name: propTypes.string
        })),
        viewStatisNum: propTypes.number,
        viewCommentNum: propTypes.number,
        viewStarNum: propTypes.number
    }

    getTags = () => {
        var tags = this.props.tags;
        var result = [];
        if(tags != null){
            for(var i = 0, len = tags.length; i < len; i++){
                result.push(<li key={i} className={ContentCardCss.tag}><Icon type="tag" style={{marginRight:'2px'}} />{tags[i].name}</li>);
            }
            //result.push(<li key={1} className={ContentCardCss.tag}><Icon type="tag" style={{marginRight:'2px'}} />{tags.name}</li>);
        }
        return result;

    }

    getContentImages = () => {
        if(this.props.images != null && this.props.type == "mood"){
            var result = [];
            // var className = ContentCardCss.contentImg + " " + (this.props.images.length > 1 ? ContentCardCss.manyImage : "");
            var className = ContentCardCss.contentImg;
            for(var i = 0, len = this.props.images.length; i < len; i++){
                result.push(<div key={i} className={className}>
                    <img src={require('~/img/bg.jpg')}></img>
                </div>);
            }
            return result;
        }else if(this.props.images != null && this.props.type == "normal"){
            return (<div key={i} className={ContentCardCss.contentImg}>
                <img src={require(this.props.images[i])}></img>
            </div>);
        }
    }

    getContent = () => {
        if(this.props.type == "normal"){
            return (
                <div className={ContentCardCss.content}>
                    <Row style={{height:'100%'}}>
                        <Col xs={24} sm={16} md={17} lg={18} xl={20} style={{height:'100%'}}>
                            <div className={ContentCardCss.contentText}>{this.props.content}</div>
                        </Col>
                        <Col xs={24} sm={8} md={7} lg={6} xl={6} style={{height:'100%'}}>
                            <div className={ContentCardCss.contentImg}>
                                <img src={require(this.props.images)}></img>
                            </div>
                        </Col>
                    </Row>
                </div>
            );
        }else if(this.props.type == "mood"){
            return (
                <div className={ContentCardCss.content}>
                    <div className={ContentCardCss.contentText}>{this.props.content}</div>
                    <div className={ContentCardCss.manyImage}>
                        {this.getContentImages()}
                    </div>
                </div>
            );
        }
    }

    render() {
        return (<div className={ContentCardCss.ContentCard + " " + (this.props.type == "normal" ? ContentCardCss.normal : this.props.type == "mood" ? ContentCardCss.mood : "")}>
            <Card loading={this.props.loading} bordered={false} noHovering={true}>
                <div className={ContentCardCss.title}>{this.props.title}</div>
                {this.getContent()}
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
