import React from 'react';
import PropTypes from 'prop-types';

class MediaQuery extends React.Component {

    static defaultProps = {
        maxWidth: null,
        minWidth: null,
        maxHeight: null,
        minHeight: null
    }

    constructor(props) {
        super(props);
        var visible = this.checkVisible();
        this.state = {
            visible: visible
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.onResize);
    }

    componentWillMount() {
        window.removeEventListener("resize", this.onResize);
    }

    componentDidUpdate(prevProps, prevState) {
        var visible = this.checkVisible();
        if(visible != this.state.visible){
            this.setState({
                visible: this.checkVisible()
            });
        }
    }

    onResize = () => {
        clearTimeout(this.lastSetTimeoutId);
        this.lastSetTimeoutId = setTimeout(()=>{
            var visible = this.checkVisible();
            if(visible != this.state.visible){
                this.setState({
                    visible: this.checkVisible()
                });
            }
        },100);
    }

    checkVisible = () => {
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        if((this.props.maxWidth != null ? width >= this.props.maxWidth : true)
            && (this.props.minWidth != null ? width < this.props.minWidth : true)
            && (this.props.maxHeight != null ? height >= this.props.maxHeight : true)
            && (this.props.minHeight != null ? height < this.props.minHeight : true)){
            return true;
        }
        return false;
    }

    render() {
        return (<div>
                {this.state.visible == true ? this.props.children : ""}
            </div>);
    }
}

MediaQuery.propTypes = {
    maxWidth: PropTypes.number,
    minWidth: PropTypes.number,
    maxHeight: PropTypes.number,
    minHeight: PropTypes.number
}

export default MediaQuery;
