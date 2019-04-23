import * as React from 'react';

import { LeftColumnProps } from '../../declerations/LeftColumn.d';
import { LogoContainer, StyledLeftColumn } from './LeftColumn.styled';
import Logo from '../Logo/Logo';

const LeftColumn: React.FunctionComponent<LeftColumnProps> = ({ children }) => (
  <StyledLeftColumn>
    <LogoContainer>
      <Logo/>
    </LogoContainer>
    {children}
  </StyledLeftColumn>  
);

export default LeftColumn;