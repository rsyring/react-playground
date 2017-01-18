import React, {Component} from 'react';
import Clock from './components/Clock.js'
import ClockStore from './stores/ClockStore.js'
import TempCalc from './components/TempCalc.js'
import TempCalcStore from './stores/TempCalcStore.js'

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
                <TempCalc store={new TempCalcStore()} />
            </div>
        )
    }
}

export default App;
