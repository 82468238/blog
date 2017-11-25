import React from 'react';
import appCss from './app.css';
import Header from './components/header/header';
import Content from './components/content/content';

class App extends React.Component {
    render() {
        return (<div>
            <Header></Header>
            <Content></Content>
        </div>)
    };
}

export default App;
