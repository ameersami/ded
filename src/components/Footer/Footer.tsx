import * as React from 'react';

import {
  Heart,
  StyledFooterText,
} from './Footer.styled';

const Footer: React.FunctionComponent<{}> = () => (
  <StyledFooterText>
    <span>Inspired by Tim Urban post <a href="https://waitbutwhy.com/2014/05/life-weeks.html" target="_blank">'Your Life in Weeks'</a></span>
    <span>Made with <Heart/> by <a href="http://ameersami.com" target="_blank">Ameer Sami</a></span>
  </StyledFooterText>
);

export default Footer;
