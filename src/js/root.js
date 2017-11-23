import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './app';

class Root extends React.Component {
    render() {
        return (<BrowserRouter>
            <Route component={App} path="/"></Route>
        </BrowserRouter>
        );
    };
}

ReactDom.render(<Root></Root>, document.getElementById("root"));
