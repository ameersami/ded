import * as React from 'react';

import { TabGroupProps } from '../../declerations/TabGroup.d';
import { Tab, TabContainer } from './TabGroup.styled';

const TabGroup: React.FunctionComponent<TabGroupProps> = ( { tabs, onChange, selectedTab }) => (
  <TabContainer>
    {tabs.map((tab: String, index: number) => <Tab key={`${tab}-${index}`} isSelected={tab === selectedTab} onClick={onChange}>{tab}</Tab>)}
  </TabContainer>
);

export default TabGroup;
