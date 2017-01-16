import React from 'react';
import {observer} from "mobx-react";

@observer
export default class Clock extends React.Component {

  render() {
    var cs = this.props.clockStore;
    return (
        <div className="Clock">
          <p className="time">It is {cs.currentDate.toLocaleTimeString()}</p>
          <button onClick={cs.stop}>Stop</button>
          <button onClick={cs.start}>Start</button>
        </div>
    );
  }
}