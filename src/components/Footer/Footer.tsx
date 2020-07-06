import * as React from 'react';

import './Footer.css';

const Footer: React.FunctionComponent<{}> = () => (
  <div className="footerText">
    <span>Inspired by Tim Urban post <a href="https://waitbutwhy.com/2014/05/life-weeks.html" target="_blank">'Your Life in Weeks'</a></span>
    <span>{' '} Made with <div className="heart"/> by <a href="http://ameersami.com" target="_blank">Ameer Sami</a></span>
  </div>
);

export default Footer;
