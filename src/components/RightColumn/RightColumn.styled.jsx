import styled from 'styled-components';

const StyledRightColumn = styled.div`
  width: 75%;
  height: 100vh;
  box-sizing: border-box;
  background: #28264B;
  padding: 40px;

  @media only screen and (max-width: 1056px) {
    &{
      width: 100%;
    }
  }

`;

const ContentContainer = styled.div`
  background: #686781;
  border-radius: 10px;
  width: 100%;
  height: calc(100% - 40px);
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;

  &::-webkit-scrollbar{
    display: none;
  }
`;

export {
  ContentContainer,
  StyledRightColumn,
};
