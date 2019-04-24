import { default as styled } from 'styled-components';

const StyledLeftColumn = styled.div`
  background: #4A4A4A;
  box-shadow: 0 0 25px -2px rgba(255,255,255,0.15);
  box-sizing: border-box;
  height: 100vh;
  width: 33%;
  z-index: 1;
  padding: 40px;

  & .DayPickerInput{
    width: 100%;
  }
  
`;

const LogoContainer = styled.div`
  margin-bottom: 64px;
  width: 100%;
  height: auto;
`;

export {
  LogoContainer,
  StyledLeftColumn
};