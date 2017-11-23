import React from 'react';
import appCss from '../css/app.css';
import PcHeader from './components/header/pc-header';
import MobileHeader from './components/header/mobile-header';

class App extends React.Component {
    render() {
        return (<div>
            <PcHeader></PcHeader>
        </div>)
    };
}

export default App;
