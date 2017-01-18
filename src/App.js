import React, {Component} from 'react';
import Clock from './components/Clock.js'
import TempCalc from './components/TempCalc.js'
import ClockStore from './stores/ClockStore.js'
//styles
//import './App.less';
//import './App.scss';
//import './App.styl';
//import styles from './Modules.css';

class App extends Component {
    render() {
        return (
            <div id="app">
                <h2>Just a title</h2>
                <Clock clockStore={new ClockStore()} />
                <hr />
                <TempCalc />
            </div>
        )
    }
}

export default App;
