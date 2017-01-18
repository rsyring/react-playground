import React from 'react';
import {observer} from "mobx-react";
import './TempCalc.sass';

const scaleNames = {
    c: 'C',
    f: 'F'
};


class TemperatureInput extends React.Component {
    handleChange = (e) => {
        this.props.onChange(e.target.value);
    }

    render() {
        const value = this.props.value;
        const scale = this.props.scale;
        return (
            <span className="temp-input">
                <input value={value} onChange={this.handleChange} /> &deg;
                <span>{scaleNames[scale]}</span>
            </span>
        );
    }
}


function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}


function displayNumber(value) {
    if (Number.isNaN(value)) {
        return '';
    }
    const rounded = Math.round(value * 1000) / 1000;
    return rounded.toString();
}


@observer
export default class TempCalc extends React.Component {

    handleCelsiusChange = (value) => {
        this.props.store.tempChange(value, 'c');
    }

    handleFahrenheitChange = (value) => {
        this.props.store.tempChange(value, 'f');
    }

    render() {
        const store = this.props.store;
        if( store.scale === 'c') {
            // Display exactly what the user typed
            var cDisplay = store.celcius.toString();
            // Format the display as the value is based on a conversion
            var fDisplay = displayNumber(store.fahrenheit);
        } else {
            // Format the display as the value is based on a conversion
            var cDisplay = displayNumber(store.celcius);
            // Display exactly what the user typed
            var fDisplay = store.fahrenheit.toString();
        }
        return (
            <div className="tempcalc">
                <fieldset>
                    <legend>Enter temperature:</legend>
                        <TemperatureInput scale="c" onChange={this.handleCelsiusChange} value={cDisplay} />
                        <TemperatureInput scale="f" onChange={this.handleFahrenheitChange} value={fDisplay} />
                </fieldset>
                <BoilingVerdict celsius={store.celcius} />
            </div>
        );
    }
}
