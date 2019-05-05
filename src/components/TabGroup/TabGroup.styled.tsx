import { default as styled } from 'styled-components';

const Tab: any = styled.button`
  border: none;
  background: none;
  color: ${(props: any) => props.isSelected ? '#1565c0' : '#e0e0e0'};
  border-bottom: 2px solid ${(props: any) => props.isSelected ? '#1565c0' : 'transparent'};
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