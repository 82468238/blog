import React from 'react';

var demo = ComposeComponent => class extends ComposeComponent {

    constructor(){
        super();
        this.state = {
            name : "bbb"
        };
    }

    hello(){
        console.log('hello');
    }

    render(){
        return(
            <ComposeComponent hello={this.hello} name={this.state.name}></ComposeComponent>
        );
    }

}

export default demo;
