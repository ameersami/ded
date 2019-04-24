import * as React from 'react';

import { RightColumnProps } from '../../declerations/RightColumn.d';
import StyledRightColumn from './RightColumn.styled';
import WeekCalender from '../WeekCalender/WeekCalender';

const RightColumn: React.FunctionComponent<RightColumnProps> = (props) => {
  
  const [showCal, setShowCal] = React.useState(true);
  const [showTime, setShowTime] = React.useState(false);

  const toggleDisplay = () => {
    setShowCal(!showCal);
    setShowTime(!showTime);
  }

  return (
    <StyledRightColumn>
      <button onClick={toggleDisplay}>Toggle</button>
      {showCal && <WeekCalender/>}
    </StyledRightColumn>
  );
};

export default RightColumn;