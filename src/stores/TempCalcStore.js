import {observable, action, computed} from 'mobx';


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}


export default class TempCalcStore {
    @observable temperature = {value: 50, scale: 'c'};

    @action tempChange = (value, scale) => {
        if( scale !== 'c' && scale !== 'f' ) {
            throw String('Scale must be "c" or "f"')
        }
        this.temperature.value = value;
        this.temperature.scale = scale;
    }

    @computed get celcius() {
        const temp = this.temperature;
        if( temp.scale === 'c' ) {
            return temp.value;
        }
        return toCelsius(temp.value);
    }

    @computed get fahrenheit() {
        const temp = this.temperature;
        if( temp.scale === 'f' ) {
            return temp.value;
        }
        return toFahrenheit(temp.value);
    }

    @computed get scale() {
        return this.temperature.scale;
    }

}
