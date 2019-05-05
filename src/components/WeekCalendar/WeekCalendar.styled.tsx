import { default as styled } from 'styled-components';

const WeekContainer = styled.div`
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

const WeekBox: any = styled.div`
  background: ${(props: any) => props.notLived ? '#e0e0e0' : '#27264B'};
  height: 7px;
  width: 7px;
  box-sizing: border-box;
`;

export {
  WeekContainer,
  WeekBox,
};
