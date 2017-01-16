import {observable} from 'mobx';


export default class ClockStore {
    @observable currentDate;
    intervalId = null;

    constructor() {
        this.start();
    }

    update = () => {
        this.currentDate = new Date();
    }

    start = () => {
        // Don't allow multiple intervals to be set otherwise we can not
        // correctly stop it as the earlier interval ids get lost.
        if( this.intervalId !== null) {
            return;
        }
        this.update();
        this.intervalId = setInterval(this.update, 1000);
    }

    stop = () => {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
}
