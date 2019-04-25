import * as React from 'react';

import { WeekContainer, WeekBox } from './WeekCalendar.styled';
import { WeekCalendarProps } from '../../declerations/WeekCalendar.d';

const generateWeeks = (totalWeeks: number, weeksLived: number) => {
  const weeks = [];
  for(let i = 0; i < totalWeeks; i++){
    i < weeksLived ? 
      weeks.push(<WeekContainer><WeekBox/></WeekContainer>)
    :
      weeks.push(<WeekContainer><WeekBox notLived/></WeekContainer>);
  }
  return weeks;
}

const WeekCalendar: React.FunctionComponent<WeekCalendarProps> = (props) => (
  <React.Fragment>
    {generateWeeks(props.totalWeeks, props.weeksLived)}
  </React.Fragment>
);

export default WeekCalendar;
