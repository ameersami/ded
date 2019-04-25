import { default as styled } from 'styled-components';

const StyledRightColumn = styled.div`
  width: 75%;
  height: 100vh;
  box-sizing: border-box;
  background: #28264B;
  padding: 40px;
`;

const ContentContainer = styled.div`
  background: #686781;
  border-radius: 10px;
  width: 100%;
  height: calc(100% - 40px);
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export {
  ContentContainer,
  StyledRightColumn
};
