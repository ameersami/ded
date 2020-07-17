import * as React from 'react';

import { TabGroupProps } from '../../declerations/TabGroup.d';
import './TabGroup.css'

const TabGroup: React.FunctionComponent<TabGroupProps> = ( { tabs, onChange, selectedTab }) => (
  <div className="TabContainer">
    {tabs.map((tab: String, index: number) => <button className={`Tab ${tab === selectedTab ? 'selected' : null}`} key={`${tab}-${index}`} onClick={onChange}>{tab}</button>)}
  </div>
);

export default TabGroup;
