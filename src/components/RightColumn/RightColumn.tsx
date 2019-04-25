import * as React from 'react';

import { RightColumnProps } from '../../declerations/RightColumn.d';
import { StyledRightColumn, ContentContainer } from './RightColumn.styled';
import WeekCalender from '../WeekCalendar/WeekCalendar';
import TabGroup from '../TabGroup/TabGroup';
import Countdown from '../Countdown/Countdown';

const TabOptions = ['Calendar', 'Clock']

const calculateNumOfWeeksPassed = (dob: Date): number => Math.floor(((new Date() - dob) / 86400000) / 7);

const calculateNumTotalWeeks = (dob: Date, deathDate: Date): number => Math.floor(((deathDate - dob) / 86400000 ) / 7);

const getDeathDate = (dob: Date, deathAge: Number): Date => {
  const deathDate = new Date(dob);
  deathDate.setFullYear(dob.getFullYear() + parseInt(deathAge));
  return deathDate;
}

const RightColumn: React.FunctionComponent<RightColumnProps> = (props) => {
  
  const [showCal, setShowCal] = React.useState(true);
  const [showTime, setShowTime] = React.useState(false);

  const toggleDisplay = () => {
    setShowCal(!showCal);
    setShowTime(!showTime);
  }

  const deathDate = (props.dob && props.deathAge) ? getDeathDate(props.dob, props.deathAge) : 0;
  const totalWeeks = (props.dob && props.deathAge) ? calculateNumTotalWeeks(props.dob, deathDate) : 0;
  const weeksLived = (props.dob && props.deathAge) && calculateNumOfWeeksPassed(props.dob);

  return (
    <StyledRightColumn>
      <TabGroup tabs={TabOptions} onChange={toggleDisplay} selectedTab={showCal ? TabOptions[0] : TabOptions[1]} />
      <ContentContainer>
        {showCal && <WeekCalender totalWeeks={totalWeeks} weeksLived={weeksLived}/>}
        {showTime && <Countdown date={deathDate}/>}
      </ContentContainer>
    </StyledRightColumn>
  );
};

export default RightColumn;