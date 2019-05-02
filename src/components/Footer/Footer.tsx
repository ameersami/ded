import * as React from 'react';
import { default as styled } from 'styled-components';

const StyledFooterText = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: white;
  width: calc(100% - 80px);
`;

const Footer: React.FunctionComponent<{}> = () => (
  <StyledFooterText>
    Inspired by xyz and this thing and another
  </StyledFooterText>
);

export default Footer;