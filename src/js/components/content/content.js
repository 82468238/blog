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
                    <ContentCard loading={false} viewStatisNum={30} viewStarNum={5} title="初学摄影时我先“恶补”了这些｜手机摄影那点事" tags={[{id:0,name:"摄影"}]} content={"学手机摄影一年多，从最开始只知道看啥拍啥，到现在知道要“先看、后想、再拍”；从开始只凭感觉拍，到现在会结合环境，光线等，构图拍，这应该是每个摄影小白都会经历的过程。 其实很多..."}></ContentCard>
                    <ContentCard loading={false} viewStatisNum={30} viewStarNum={5} title="多少女同学，情归老同学" tags={[{id:0,name:"谈谈情，说说爱"}]} content={"和我妈视频的时候，聊起了最近的几起社会新闻，两人一起感慨现在的变态真多。我妈说：“你一个人在外面我们也不放心，要是有个男朋友一起，我们还能放心点！” 我笑道：“还男朋友能放心..."}></ContentCard>
                </Col>
            </Row>
        </div>);
    }
}

export default Content;
