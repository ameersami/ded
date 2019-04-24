import * as React from 'react';
import { default as styled } from 'styled-components';

const WeekCalContainer = styled.div`
  background: #686781;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

const WeekCalender: React.FunctionComponent<{}> = () => (
  <WeekCalContainer/>
);

export default WeekCalender;
