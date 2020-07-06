import * as React from 'react';

import { RightColumnProps } from '../../declerations/RightColumn';
import WeekCalender from '../WeekCalendar/WeekCalendar';
import TabGroup from '../TabGroup/TabGroup';
import Countdown from '../Countdown/Countdown';
import './DaysRemainingDisplay.css';

const TabOptions = ['Calendar', 'Clock']

const calculateNumOfWeeksPassed = (dob: any): number => Math.floor(((+new Date() - dob) / 86400000) / 7);

const calculateNumTotalWeeks = (dob: any, deathDate: any): number => Math.floor(((deathDate - dob) / 86400000 ) / 7);

const getDeathDate = (dob: Date, deathAge: any): Date => {
  const deathDate = new Date(dob);
  deathDate.setFullYear(dob.getFullYear() + parseFloat(deathAge));
  return deathDate;
}

const DaysRemainingDisplay: React.FunctionComponent<RightColumnProps> = (props) => {
  
  const [showCal, setShowCal] = React.useState(true);
  const [showTime, setShowTime] = React.useState(false);

  const toggleDisplay = () => {
    setShowCal(!showCal);
    setShowTime(!showTime);
  }

  const dob = (!props.dob || isNaN(props.dob.getTime())) ? new Date() : props.dob;

  const deathDate: Date = (dob && props.deathAge) ? getDeathDate(dob, props.deathAge) : new Date();
  const totalWeeks = (dob && props.deathAge) ? calculateNumTotalWeeks(dob, deathDate) : 0;
  const weeksLived = (dob && props.deathAge) && calculateNumOfWeeksPassed(dob);

  return (
    <div className="styledRightColumn">
      <TabGroup tabs={TabOptions} onChange={toggleDisplay} selectedTab={showCal ? TabOptions[0] : TabOptions[1]} />
      <div className="contentContainer">
        {showCal && <WeekCalender totalWeeks={totalWeeks} weeksLived={weeksLived}/>}
        {showTime && <Countdown date={deathDate}/>}
      </div>
    </div>
  );
};

export default DaysRemainingDisplay;