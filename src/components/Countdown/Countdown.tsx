import * as React from 'react';
import Countdown from 'react-countdown-now';
import { default as styled } from 'styled-components';

interface CountdownProps {
  date: Date;
}

const CountdownContainer = styled.div`
  margin: auto;
  width: 100%;
`;

const CountdownBlock = styled.div`
  text-align: left;
  float: left;
  margin: 10px;
`;

const Date = styled.span`
  color: #ffffff;
  font-size: 16px;
  width: 100%;
  float: left;
  font-size: 56px;
`;

const Label = styled.span`
  width: 100%;
  color: #b0bec5;
  float: left;
  clear: both;
  font-size: 14px;
`;

const CountDownLabel = styled.div`
  text-align: center;
  margin: auto;
  display: table;
  font-size: 40px;
  top: -50px;
  position: relative;
  color: #bdbdbd;
  text-transform: capitalize;
`;

const CountdownWrapper = styled.div`
  margin: auto;
  display: table;
`;

const CountdownWLabels: React.FunctionComponent<CountdownProps> = ({ date = new Date() }) => (
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