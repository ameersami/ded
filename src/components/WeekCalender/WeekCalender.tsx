import * as React from 'react';
import { default as styled } from 'styled-components';

const WeekCalContainer = styled.div`
  background: #686781;
  border-radius: 10px;
  width: 100%;
  height: calc(100% - 40px);
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const WeekBox = styled.div`
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 2px;
  max-height: 10px;
  max-width: 10px;
  height: 10px;
  width: 10px;
  box-sizing: border-box;
`;

const ColoredBox = styled.div`
  background: ${(props: any) => props.notLived ? 'white' : 'blue'};
  height: 7px;
  width: 7px;
  box-sizing: border-box;
`;

interface WeekCalenderProps {
  totalWeeks: number
  weeksLived: number
}

const generateWeeks = (totalWeeks: number, weeksLived: number) => {
  const weeks = [];
  console.time('making weeks');
  for(let i = 0; i < totalWeeks; i++){
    if(i < weeksLived) {
      weeks.push(<WeekBox><ColoredBox/></WeekBox>);
    }else{
      weeks.push(<WeekBox><ColoredBox notLived/></WeekBox>);
    }
  }
  console.timeEnd('making weeks');
  return weeks;
}

const WeekCalender: React.FunctionComponent<WeekCalenderProps> = (props) => (
  <WeekCalContainer>
    {generateWeeks(props.totalWeeks, props.weeksLived)}
  </WeekCalContainer>
);

export default WeekCalender;
