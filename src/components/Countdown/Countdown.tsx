import * as React from 'react';
import Countdown from 'react-countdown-now';

import { CountdownProps } from '../../declerations/Countdown.d';
import './Countdown.css';

const CountdownWLabels: React.FunctionComponent<CountdownProps> = ({ date }) => (
  <div className="countdownContainer">
    <div className="countdownLabel">
      What are you waiting for? Your life is ticking away!
    </div>
    <div className="countdownWrapper">
      <Countdown date={date} renderer={
        ({ total, days, hours, minutes, seconds, milliseconds, completed }) => (
          <React.Fragment>
            <div className="countdownBlock">
              <span className="date">
                {Math.floor(days/7)}
              </span>
              <span className="label">
                weeks
              </span>
            </div>
            <div className="countdownBlock">
              <span className="date">
                {hours}
              </span>
              <span className="label">
                hours
              </span>
            </div>
            <div className="countdownBlock">
              <span className="date">
                {minutes}
              </span>
              <span className="label">
                minutes
              </span>
            </div>
            <div className="countdownBlock">
              <span className="date">
                {seconds}
              </span>
              <span className="label">
                seconds
              </span>
            </div>
          </React.Fragment>
        )
      }/>
    </div>
  </div>
);

export default CountdownWLabels;
