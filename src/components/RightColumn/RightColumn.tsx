import * as React from 'react';

import { RightColumnProps } from '../../declerations/RightColumn.d';
import StyledRightColumn from './RightColumn.styled';
import WeekCalender from '../WeekCalender/WeekCalender';
import TabGroup from '../TabGroup/TabGroup';

const TabOptions = ['Calendar', 'Clock']

const RightColumn: React.FunctionComponent<RightColumnProps> = (props) => {
  
  const [showCal, setShowCal] = React.useState(true);
  const [showTime, setShowTime] = React.useState(false);

  const toggleDisplay = () => {
    setShowCal(!showCal);
    setShowTime(!showTime);
  }

  return (
    <StyledRightColumn>
      <TabGroup tabs={TabOptions} onChange={toggleDisplay} selectedTab={showCal ? TabOptions[0] : TabOptions[1]} />
      {showCal && <WeekCalender/>}
    </StyledRightColumn>
  );
};

export default RightColumn;