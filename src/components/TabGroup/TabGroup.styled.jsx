import styled from 'styled-components';

const Tab = styled.button`
  border: none;
  background: none;
  color: ${props => props.isSelected ? '#1565c0' : '#e0e0e0'};
  border-bottom: 2px solid ${props => props.isSelected ? '#1565c0' : 'transparent'};
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
`;

const TabContainer = styled.div`
  width: 100%;
  height: 20px;
  padding-bottom: 20px;
  text-align: center;
`;

export {
  Tab,
  TabContainer,
}