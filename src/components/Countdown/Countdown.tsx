import * as React from 'react';
import Countdown from 'react-countdown-now';

import { CountdownProps } from '../../declerations/Countdown.d';
import {
  CountdownBlock,
  CountdownContainer,
  CountDownLabel,
  CountdownWrapper,
  Date,
  Label,
} from './Countdown.styled';

const CountdownWLabels: React.FunctionComponent<CountdownProps> = ({ date }) => (
  <CountdownContainer>
    <CountDownLabel>
      What are you waiting for? Your life is ticking away!
    </CountDownLabel>
    <CountdownWrapper>
      <Countdown date={date} renderer={
        ({ total, days, hours, minutes, seconds, milliseconds, completed }) => (
          <React.Fragment>
            <CountdownBlock>
              <Date>
                {Math.floor(days/7)}
              </Date>
              <Label>
                weeks
              </Label>
            </CountdownBlock>
            <CountdownBlock>
              <Date>
                {hours}
              </Date>
              <Label>
                hours
              </Label>
            </CountdownBlock>
            <CountdownBlock>
              <Date>
                {minutes}
              </Date>
              <Label>
                minutes
              </Label>
            </CountdownBlock>
            <CountdownBlock>
              <Date>
                {seconds}
              </Date>
              <Label>
                seconds
              </Label>
            </CountdownBlock>
          </React.Fragment>
        )
      }/>
    </CountdownWrapper>
  </CountdownContainer>
);

export default CountdownWLabels;
