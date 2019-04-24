import * as React from 'react';

import { RightColumnProps } from '../../declerations/RightColumn.d';
import StyledRightColumn from './RightColumn.styled';
import WeekCalender from '../WeekCalender/WeekCalender';
import TabGroup from '../TabGroup/TabGroup';

const TabOptions = ['Calendar', 'Clock']

const calculateNumOfWeeksPassed = (dob: Date): number => Math.floor(((new Date() - dob) / 86400000) / 7);

const calculateNumTotalWeeks = (dob: Date, deathAge: Number): number => {
  const deathDate = new Date(dob);
  deathDate.setFullYear(dob.getFullYear() + parseInt(deathAge));
  
  return Math.floor(((deathDate - dob) / 86400000 ) / 7);
}

const RightColumn: React.FunctionComponent<RightColumnProps> = (props) => {
  
  const [showCal, setShowCal] = React.useState(true);
  const [showTime, setShowTime] = React.useState(false);

  const toggleDisplay = () => {
    setShowCal(!showCal);
    setShowTime(!showTime);
  }

  const totalWeeks = (props.dob && props.deathAge) ? calculateNumTotalWeeks(props.dob, props.deathAge) : 0;
  const weeksLived = (props.dob && props.deathAge) && calculateNumOfWeeksPassed(props.dob);

  return (
    <StyledRightColumn>
      <TabGroup tabs={TabOptions} onChange={toggleDisplay} selectedTab={showCal ? TabOptions[0] : TabOptions[1]} />
      {showCal && <WeekCalender totalWeeks={totalWeeks} weeksLived={weeksLived}/>}
    </StyledRightColumn>
  );
};

export default RightColumn;