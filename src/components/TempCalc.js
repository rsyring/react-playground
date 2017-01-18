import React from 'react';
import './TempCalc.sass';

const scaleNames = {
    c: 'C',
    f: 'F'
};


class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
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

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(value, convert) {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}



export default class TempCalc extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {value: '', scale: 'c'};
    }

    handleCelsiusChange(value) {
        this.setState({scale: 'c', value});
    }

    handleFahrenheitChange(value) {
        this.setState({scale: 'f', value});
    }


    render() {
        const scale = this.state.scale;
        const value = this.state.value;
        const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
        const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;

        return (
            <div className="tempcalc">
                <fieldset>
                    <legend>Enter temperature:</legend>
                        <TemperatureInput scale="c" onChange={this.handleCelsiusChange} value={celsius} />
                        <TemperatureInput scale="f" onChange={this.handleFahrenheitChange} value={fahrenheit} />
                </fieldset>
                <BoilingVerdict celsius={parseFloat(value)} />
            </div>
        );
    }
}
