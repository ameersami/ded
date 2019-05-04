import styled from 'styled-components';

const CountdownContainer = styled.div`
  margin: auto;
  width: 100%;
`;

const CountdownBlock = styled.div`
  text-align: left;
  float: left;
  margin: 10px;
`;

const Date = styled.span`
  color: #ffffff;
  width: 100%;
  float: left;
  font-size: 56px;
  
  @media only screen and (max-width: 1056px) {
    &{
      font-size: 26px;
    }
  }

`;

const Label = styled.span`
  width: 100%;
  color: #b0bec5;
  float: left;
  clear: both;
  font-size: 14px;
`;

const CountDownLabel = styled.div`
  text-align: center;
  margin: auto;
  display: table;
  font-size: 40px;
  top: -50px;
  position: relative;
  color: #bdbdbd;
  text-transform: capitalize;

  @media only screen and (max-width: 1056px) {
    &{
      font-size: 22px;
    }
  }

`;

const CountdownWrapper = styled.div`
  margin: auto;
  display: table;
`;

export {
  CountdownBlock,
  CountdownContainer,
  CountDownLabel,
  CountdownWrapper,
  Date,
  Label,
};
