import * as React from 'react';
import { default as styled } from 'styled-components';

interface TabGroupProps {
  tabs: Array<String>;
  selectedTab: String;
  onChange: (prevTab: String, newTab: String) => any | Function;
}

const StyledTab = styled.button`
  border: none;
  background: none;
  color: ${(props: any) => props.isSelected ? '#2196f3' : 'white'};
  border-bottom: 2px solid ${(props: any) => props.isSelected ? '#2196f3' : 'transparent'};
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

const TabGroup: React.FunctionComponent<TabGroupProps> = ( { tabs, onChange, selectedTab }) => {
  const parsedTabs = tabs.map((tab: String) => <StyledTab isSelected={tab === selectedTab} onClick={onChange}>{tab}</StyledTab>);
  
  return(
    <TabContainer>
      {parsedTabs}
    </TabContainer>
  )
};

export default TabGroup;
